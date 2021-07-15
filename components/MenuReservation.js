import Link from 'next/link'
import RodalStyles from './styles/RodalStyles'
import NavStyles from './styles/NavStyles'

class MenuReservation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuModalItems: '',
      ruta: ''
    }
  }

  render() {
    const noOKmenuModalItems = this.props.menuModalItems
    const menuModalItems = [...noOKmenuModalItems]
    const ruta = this.props.ruta
    return (
      <React.Fragment>
        {ruta.includes('reserv') ||
        ruta.includes('mai') ||
        ruta.includes('menu-mai') ||
        ruta.includes('buy') ||
        ruta.includes('compra') ? (
          ''
        ) : (
          <NavStyles className="starred">
            {menuModalItems
              .filter(menuModalItem => menuModalItem.class == 'starred')
              .map(menuModalItem => (
                <RodalStyles key={menuModalItem.id}>
                  <React.Fragment>
                    <Link href={menuModalItem.path} >
                      <a title={menuModalItem.name} id={menuModalItem.id}>
                        {ruta.includes('/en') ? (
                          <img loading='lazy'
                            title={menuModalItem.name}
                            src="/static/reservation.svg"
                            style={{
                              width: '120px',
                              height: '120px',
                              objectFit: 'cover'
                            }}
                          />
                        ) : (
                          <img loading='lazy'
                            title={menuModalItem.name}
                            src="/static/reservar.svg"
                            style={{
                              width: '120px',
                              height: '120px',
                              objectFit: 'cover'
                            }}
                          />
                        )}
                      </a>
                    </Link>
                  </React.Fragment>
                </RodalStyles>
              ))}
          </NavStyles>
        )}
      </React.Fragment>
    )
  }
}

export default MenuReservation
