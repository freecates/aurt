import Link from 'next/link'
import FooterStyles from './styles/FooterStyles'

const FooterThird = props => (
  <FooterStyles ruta={props.ruta} className="third">
    <div>
      {props.ruta.includes('/en') && (
        <section>
          <Link href={'/en/reservation'} prefetch>
            <a>RESERVATION</a>
          </Link>
        </section>
      )}
      {props.ruta.includes('/ca') && (
        <section>
          <Link href={'/ca/reserva'} prefetch>
            <a>RESERVAR</a>
          </Link>
        </section>
      )}
      {props.ruta.indexOf('/ca') == -1 &&
        (props.ruta.indexOf('/en') == -1 && (
          <Link href="/reserva" prefetch>
            <a>RESERVAR</a>
          </Link>
        ))}
    </div>
  </FooterStyles>
)

export default FooterThird
