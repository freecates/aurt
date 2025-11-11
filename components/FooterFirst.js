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
          <a href='mailto:info@aurtrestaurant.com'>info@aurtrestaurant.com</a>
        </p>
      </div>
    )}
    {props.ruta.includes('/ca') && (
      <div>
        <p>
          <strong>AÜRT RESTAURANT</strong>
        </p>
        <p className='light-brown'>
          <a href='mailto:info@aurtrestaurant.com'>info@aurtrestaurant.com</a>
        </p>
      </div>
    )}
    {props.ruta.indexOf('/ca') == -1 && props.ruta.indexOf('/en') == -1 && (
      <div>
        <p>
          <strong>AÜRT RESTAURANT</strong>
        </p>
        <p className='light-brown'>          
          <a href='mailto:info@aurtrestaurant.com'>info@aurtrestaurant.com</a>
        </p>
      </div>
    )}
  </FooterStyles>
);

export default FooterFirst;
