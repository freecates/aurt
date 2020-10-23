import fetch from 'isomorphic-unfetch'
import InnerLayout from '../../components/InnerLayout'
import Title from '../../components/styles/Title'
import TextSeparator from '../../components/styles/TextSeparator'
import ItemStyles from '../../components/styles/ItemStyles'
import Head from 'next/head'

const Page = props => (
  <InnerLayout mainlayout>
    <Head>
      <title>AÜRT Restaurant | Alta Newsletter</title>
      <meta name="description" content={'Alta Newsletter'} />
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
      <link
        rel="alternate"
        hrefLang={'en'}
        href={`https://www.aurtrestaurant.com${props.pathname.replace(
          /\//g,
          '/en/'
        )}`}
      />
      <meta
        property="og:url"
        content={`https://www.aurtrestaurant.com${props.pathname}`}
      />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`AÜRT Restaurant | Alta Newsletter`} />
      <meta property="og:description" content={'Alta Newsletter'} />
      <meta
        property="og:image"
        content={
          'https://www.aurtrestaurant.com/static/icons/og-image-aurt-web.png'
        }
      />
      <meta property="og:image:width" content="1024" />
      <meta property="og:image:height" content="1024" />
    </Head>
    <ItemStyles>
      <Title>Alta Newsletter</Title>
      <TextSeparator>
        <div className="here" />
      </TextSeparator>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </ItemStyles>
  </InnerLayout>
)

export async function getStaticProps() {
  const res = await fetch(`https://aurt-data.vercel.app/data/ca/mailchimp.html`)
  const content = await res.text()
  return {
    props: { content },
  };
}

export default Page
