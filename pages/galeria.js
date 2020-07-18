import Head from 'next/head'
import InnerLayout from '../components/InnerLayout'
import MediaItems from '../components/MediaItems'
import TextSeparator from '../components/styles/TextSeparator'
import Title from '../components/styles/Title'

const Galeria = props => (
  <InnerLayout mainlayout>
    <Head>
      <title>AURT | Galería</title>
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
    <Title>Galería</Title>
    <TextSeparator>
      <div className="here" />
    </TextSeparator>
    <MediaItems ruta={props.pathname} />
  </InnerLayout>
)

export default Galeria
