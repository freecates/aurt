import Reservations from '../components/Reservations'
import Head from 'next/head'

const Reserva = props => (
  <div>
    <Head>
      <title>AÜRT Restaurant | Reserva</title>
      <link
        rel="canonical"
        href={`https://www.aurtrestaurant.com${props.pathname}`}
      />
      <link
        rel="alternate"
        hrefLang={'ca'}
        href={`https://www.aurtrestaurant.com${props.pathname.replace(
          /\//g,
          '/ca/'
        )}`}
      />
    </Head>
    <Reservations ruta={props.pathname} name={'Saber más'} />
  </div>
)

export default Reserva
