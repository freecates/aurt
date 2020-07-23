import Reservations from '../../components/Reservations'
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
        hrefLang={'es'}
        href={`https://www.aurtrestaurant.com${props.pathname.replace(
          /\/ca\//g,
          '/'
        )}`}
      />
    </Head>
    <Reservations ruta={props.pathname} url={props.url}/>
  </div>
)

export async function getStaticProps() {
  const url = 'https://www.covermanager.com/reserve/module_restaurant/restaurante-aurtx/catalan';

  return {
    props: { url }, // will be passed to the page component as props
  };
}

export default Reserva
