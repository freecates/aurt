import Purchase from '../components/Purchase'
import Head from 'next/head'

const Compra = props => (
  <div>
    <Head>
      <title>AÜRT Restaurant | Compra</title>
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
    <Purchase ruta={props.pathname} url={props.url} />
  </div>
)

export async function getStaticProps() {
  const url = 'https://www.covermanager.com/eco/buy_products/restaurante-aurtx/spanish';

  return {
    props: { url }, // will be passed to the page component as props
  };
}

export default Compra
