import styled from 'styled-components'
import InnerLayout from './InnerLayout'
import TextBlock from './styles/TextBlock'
import SingleModal from './SingleModal'
import ReservaIframe from './ReservaIframe'

const WhiteTitle = styled.h2`
  color: #ffffff;
  text-align: left;
  text-transform: uppercase;
  margin: 3rem 1rem 3rem 1rem;

  @media (max-width: 960px) {
    margin: 3rem 7.5%;
  }
`
const TextBlockNoMargin = styled(TextBlock)`
  margin: 0 1rem;
  a {
    color: #ffffff;
    text-decoration: none;
    border-bottom: 1px solid #ffffff;
    padding-bottom: 2px;
    text-transform: uppercase;
  }
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

  @media (max-width: 960px) {
    margin: 0 7.5%;
  }
`

const Reservations = props => (
  <InnerLayout layout ruta={props.ruta} name={props.name}>
    {props.ruta.includes('/en') ? (
      <WhiteTitle>Reservations</WhiteTitle>
    ) : (
      <WhiteTitle>Reservar</WhiteTitle>
    )}

    <React.Fragment>
      <ReservaIframe ruta={props.ruta} url={props.url} />
    </React.Fragment>

    {props.ruta.includes('/ca') && (
      <TextBlockNoMargin>
        <p className="no-margin">No fem reserves superiors a 6 comensals.</p>
        <p className="no-margin">
          Confeccionem un menú personalitzat a partir de les peticions del
          client.
        </p>
        <p className="no-margin">
          Disposem de la taula 0, amb capacitat per a un màxim de 4 comensals i
          allunyada del servei en viu dels cuiners.
        </p>
      </TextBlockNoMargin>
    )}
    {props.ruta.includes('/en') && (
      <TextBlockNoMargin>
        <p className="no-margin">We do not book more than 6 guests.</p>
        <p className="no-margin">
          We make a personalized menu based on the customer's requests.
        </p>
        <p className="no-margin">
          Table 0 is available, with capacity for up to 4 people and away from
          the live service of cooks.
        </p>
      </TextBlockNoMargin>
    )}
    {props.ruta.indexOf('/ca') == -1 &&
      (props.ruta.indexOf('/en') == -1 && (
        <TextBlockNoMargin>
          <p className="no-margin">
            No hacemos reservas superiores a 6 comensales.
          </p>
          <p className="no-margin">
            Confeccionamos un menú personalizado a partir de las peticiones del
            cliente.
          </p>
          <p className="no-margin">
            Disponemos de la mesa 0, con capacidad para un máximo de 4
            comensales y alejada del servicio en vivo de los cocineros.
          </p>
        </TextBlockNoMargin>
      ))}
    <TextBlockNoMargin>
      {props.ruta.includes('/ca') && (
        <React.Fragment>
          <SingleModal
            singleModalItems={[
              {
                id: '01',
                name: 'Saber-ne més',
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
                name: 'To find out more',
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
    </TextBlockNoMargin>
  </InnerLayout>
)

export default Reservations
