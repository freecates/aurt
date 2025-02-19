import Link from 'next/link';
import FooterStyles from './styles/FooterStyles';

const FooterFirst = (props) => (
  <FooterStyles ruta={props.ruta} className='first'>
    {props.ruta.includes('/en') && (
      <div>
        <p>
          <strong>AÜRT RESTAURANT</strong>
        </p>
        <p className='light-brown'>
          <a
            href='https://www3.hilton.com/en/hotels/spain/hilton-diagonal-mar-barcelona-BCNDMHI/index.html'
            target='_blank'
            rel='noopener'>
            <strong>HILTON DIAGONAL MAR BARCELONA</strong>
          </a>
          <br />
          Passeig del Taulat 262-264 / 08019 BARCELONA (SPAIN)
          <br />
          +34 935 070 862 /{' '}
          <a href='mailto:info@aurtrestaurant.com'>info@aurtrestaurant.com</a>
          <br />
          <strong>Reservations only via web</strong> (from 2 months up to 48
          hours before)
        </p>
      </div>
    )}
    {props.ruta.includes('/ca') && (
      <div>
        <p>
          <strong>AÜRT RESTAURANT</strong>
        </p>
        <p className='light-brown'>
          <a
            href='https://www3.hilton.com/en/hotels/spain/hilton-diagonal-mar-barcelona-BCNDMHI/index.html'
            target='_blank'
            rel='noopener'>
            <strong>HILTON DIAGONAL MAR BARCELONA</strong>
          </a>
          <br />
          Passeig del Taulat 262-264 / 08019 BARCELONA (SPAIN)
          <br />
          +34 935 070 862 /{' '}
          <a href='mailto:info@aurtrestaurant.com'>info@aurtrestaurant.com</a>
          <br />
          <strong>Reserves només via web</strong> (des de 2 mesos fins 48 hores
          abans)
        </p>
      </div>
    )}
    {props.ruta.indexOf('/ca') == -1 && props.ruta.indexOf('/en') == -1 && (
      <div>
        <p>
          <strong>AÜRT RESTAURANT</strong>
        </p>
        <p className='light-brown'>
          <a
            href='https://www3.hilton.com/en/hotels/spain/hilton-diagonal-mar-barcelona-BCNDMHI/index.html'
            target='_blank'
            rel='noopener'>
            <strong>HILTON DIAGONAL MAR BARCELONA</strong>
          </a>
          <br />
          Passeig del Taulat 262-264 / 08019 BARCELONA (SPAIN)
          <br />
          +34 935 070 862 /{' '}
          <a href='mailto:info@aurtrestaurant.com'>info@aurtrestaurant.com</a>
          <br />
          <strong>Reservas solo vía web</strong> (desde 2 meses hasta 48 horas
          antes)
        </p>
      </div>
    )}
  </FooterStyles>
);

export default FooterFirst;
