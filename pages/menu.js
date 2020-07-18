import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import InnerLayout from '../components/InnerLayout'
import Title from '../components/styles/Title'
import SubTitle from '../components/styles/SubTitle'
import TextBlock from '../components/styles/TextBlock'
import TextSeparator from '../components/styles/TextSeparator'
import MenuConditions from '../components/MenuConditions'
import Head from 'next/head'
import Link from 'next/link'

const SingleModalItemName = styled.div`
  text-align: center;
  a {
    text-transform: uppercase;
    color: ${props => props.theme.lightBrown};
    text-decoration: underline;
  }
  div section div {
    text-align: left;
  }
`

const Page = props => (
  <InnerLayout mainlayout>
    <Head>
      <title>AÜRT Restaurant | {props.post.title}</title>
      <meta name="description" content={props.description} />
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
      <meta
        property="og:title"
        content={`AÜRT Restaurant | ${props.post.title}`}
      />
      <meta property="og:description" content={props.description} />
      <meta
        property="og:image"
        content={
          'https://www.aurtrestaurant.com/static/icons/og-image-aurt-web.png'
        }
      />
      <meta property="og:image:width" content="1024" />
      <meta property="og:image:height" content="1024" />
    </Head>
    <React.Fragment>
      <Title>{props.post.title}</Title>
      <SubTitle>{props.post.subTitle}</SubTitle>
      <SubTitle>{props.post.secondSubTitle}</SubTitle>
      <TextSeparator>
        <div className="here" />
      </TextSeparator>
      <TextBlock
        dangerouslySetInnerHTML={{
          __html: props.post.firstTextBlock
        }}
      />
      <TextSeparator>
        <div className="here" />
      </TextSeparator>
      <SubTitle>
        {' '}
        VER
        <Link href="/menu-degustacion" prefetch>
          <a>MENU DEGUSTACIÓN</a>
        </Link>
      </SubTitle>
      <TextSeparator>
        <div className="here" />
      </TextSeparator>
      <TextBlock>
        <SingleModalItemName>
          <MenuConditions
            ruta={props.pathname}
            name={'Condiciones de Reserva y Cancelación'}
          />
        </SingleModalItemName>
      </TextBlock>
    </React.Fragment>
  </InnerLayout>
)

Page.getInitialProps = async function() {
  const res = await fetch(`https://aurtdata.now.sh/data/menu.json`)
  const post = await res.json()
  const noOKDescription = post.firstTextBlock
  const description = noOKDescription
    .replace(/<strong>/g, '')
    .replace(/<\/strong>/g, '')
    .replace(/<br\/>/g, '')

  // console.log(`Fetched page: ${post.title}`)

  return { post, description }
}

export default Page
