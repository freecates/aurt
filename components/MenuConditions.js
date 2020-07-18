import styled from 'styled-components'
import SingleModal from './SingleModal'

const MenuConditionsBlock = styled.div`
  margin: 0 1rem;
  p.no-margin {
    margin: 0;
  }
  p:last-child {
    margin-bottom: 1em;
  }
  .left a {
    color: ${props => props.theme.lightBrown};
    text-decoration: underline;
  }
`

const MenuConditions = props => (
  <MenuConditionsBlock ruta={props.ruta} name={props.name}>
    {props.ruta.includes('/ca') && (
      <React.Fragment>
        <SingleModal
          singleModalItems={[
            {
              id: '01',
              name: props.name,
              items: [
                {
                  id: '0101',
                  name: 'Menú',
                  file: 'ca/menu.md',
                  class: 'left'
                },
                {
                  id: '0102',
                  file: 'ca/reserva.md',
                  class: 'right'
                }
              ],
              class: 'left'
            }
          ]}
        />
      </React.Fragment>
    )}
    {props.ruta.includes('/en') && (
      <React.Fragment>
        <SingleModal
          singleModalItems={[
            {
              id: '01',
              name: props.name,
              items: [
                {
                  id: '0101',
                  name: 'Menu',
                  file: 'en/menu.md',
                  class: 'left'
                },
                {
                  id: '0102',
                  file: 'en/reservation.md',
                  class: 'right'
                }
              ],
              class: 'left'
            }
          ]}
        />
      </React.Fragment>
    )}
    {props.ruta.indexOf('/ca') == -1 &&
      (props.ruta.indexOf('/en') == -1 && (
        <React.Fragment>
          <SingleModal
            singleModalItems={[
              {
                id: '01',
                name: props.name,
                items: [
                  {
                    id: '0101',
                    name: 'Menú',
                    file: 'menu.md',
                    class: 'left'
                  },
                  {
                    id: '0102',
                    file: 'reserva.md',
                    class: 'right'
                  }
                ],
                class: 'left'
              }
            ]}
          />
        </React.Fragment>
      ))}
  </MenuConditionsBlock>
)

export default MenuConditions
