import MAIPdf from '../../components/MAIPdf'
import Head from 'next/head'

const CartaMai = props => (
  <div>
    <Head>
      <title>AÜRT Restaurant | Carta MA'I</title>
      <meta name="description" content={"AÜRT Restaurant | Carta MA'I"} />
      <link
        rel="canonical"
        href={`https://www.aurtrestaurant.com${props.pathname}`}
      />
      <link
        rel="alternate"
        hrefLang={'en'}
        href={`https://www.aurtrestaurant.com${props.pathname.replace(
          /\/ca\//g,
          '/en/'
        )}`}
      />
      <link
        rel="alternate"
        hrefLang={'es'}
        href={`https://www.aurtrestaurant.com${props.pathname.replace(
          /\/ca\//g,
          '/'
        )}`}
      />
      <meta
        property="og:url"
        content={`https://www.aurtrestaurant.com${props.pathname}`}
      />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`AÜRT Restaurant | Carta MA'I`} />
      <meta
        property="og:description"
        content={"AÜRT Restaurant | Carta MA'I"}
      />
      <meta
        property="og:image"
        content={
          'https://www.aurtrestaurant.com/static/icons/og-image-aurt-web.png'
        }
      />
      <meta property="og:image:width" content="1024" />
      <meta property="og:image:height" content="1024" />
    </Head>
    <MAIPdf ruta={props.pathname} />
  </div>
)

export default CartaMai
