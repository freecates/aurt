import Link from 'next/link'
import FooterStyles from './styles/FooterStyles'

const FooterFirst = props => (
  <FooterStyles ruta={props.ruta} className="first">
    {props.ruta.includes('/en') && (
      <div>
        <p>
          <strong>AÜRT RESTAURANT</strong>
        </p>
        <p className="light-brown">
          <Link href="https://www3.hilton.com/en/hotels/spain/hilton-diagonal-mar-barcelona-BCNDMHI/index.html">
            <a target="_blank" rel="noopener">
              <strong>HILTON DIAGONAL MAR BARCELONA</strong>
            </a>
          </Link>
          <br />
          Passeig del Taulat 262-264 / 08019 BARCELONA (SPAIN)
          <br />
          +34 935 070 860 /{' '}
          <Link href="mailto:info@aurtrestaurant.com">
            <a>info@aurtrestaurant.com</a>
          </Link>
          <br />
          <strong>Reservations only via web</strong> (from 2 months up to 48
          hours before), except
          <br />
          <strong>last minute reservations</strong> (last 48 hours){' '}
          <strong>only by phone</strong>
        </p>
      </div>
    )}
    {props.ruta.includes('/ca') && (
      <div>
        <p>
          <strong>AÜRT RESTAURANT</strong>
        </p>
        <p className="light-brown">
          <Link href="https://www3.hilton.com/en/hotels/spain/hilton-diagonal-mar-barcelona-BCNDMHI/index.html">
            <a target="_blank" rel="noopener">
              <strong>HILTON DIAGONAL MAR BARCELONA</strong>
            </a>
          </Link>
          <br />
          Passeig del Taulat 262-264 / 08019 BARCELONA (SPAIN)
          <br />
          +34 935 070 860 /{' '}
          <Link href="mailto:info@aurtrestaurant.com">
            <a>info@aurtrestaurant.com</a>
          </Link>
          <br />
          <strong>Reserves només via web</strong> (des de 2 mesos fins 48 hores
          abans), excepte
          <br />
          <strong>reserves last minute</strong> (darreres 48 hores){' '}
          <strong>únicament por telèfon</strong>
        </p>
      </div>
    )}
    {props.ruta.indexOf('/ca') == -1 &&
      (props.ruta.indexOf('/en') == -1 && (
        <div>
          <p>
            <strong>AÜRT RESTAURANT</strong>
          </p>
          <p className="light-brown">
            <Link href="https://www3.hilton.com/en/hotels/spain/hilton-diagonal-mar-barcelona-BCNDMHI/index.html">
              <a target="_blank" rel="noopener">
                <strong>HILTON DIAGONAL MAR BARCELONA</strong>
              </a>
            </Link>
            <br />
            Passeig del Taulat 262-264 / 08019 BARCELONA (SPAIN)
            <br />
            +34 935 070 860 /{' '}
            <Link href="mailto:info@aurtrestaurant.com">
              <a>info@aurtrestaurant.com</a>
            </Link>
            <br />
            <strong>Reservas solo vía web</strong> (desde 2 meses hasta 48 horas
            antes), excepto
            <br />
            <strong>reservas last minute</strong> (últimas 48 horas){' '}
            <strong>únicamente por teléfono</strong>
          </p>
        </div>
      ))}
  </FooterStyles>
)

export default FooterFirst
