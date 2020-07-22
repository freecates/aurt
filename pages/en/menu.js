import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import InnerLayout from '../../components/InnerLayout'
import Title from '../../components/styles/Title'
import SubTitle from '../../components/styles/SubTitle'
import TextBlock from '../../components/styles/TextBlock'
import TextSeparator from '../../components/styles/TextSeparator'
import MenuConditions from '../../components/MenuConditions'
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
          /\/en\//g,
          '/ca/'
        )}`}
      />
      <link
        rel="alternate"
        hrefLang={'es'}
        href={`https://www.aurtrestaurant.com${props.pathname.replace(
          /\/en\//g,
          '/'
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
        SEE
        <Link href="/en/tasting-menu" >
          <a>TASTING MENU</a>
        </Link>
      </SubTitle>
      <TextSeparator>
        <div className="here" />
      </TextSeparator>
      <TextBlock>
        <SingleModalItemName>
          <MenuConditions
            ruta={props.pathname}
            name={'Conditions of Reservation and Cancellation'}
          />
        </SingleModalItemName>
      </TextBlock>
    </React.Fragment>
  </InnerLayout>
)

export async function getStaticProps() {
  const res = await fetch(`https://aurtdata.now.sh/data/en/menu.json`);
  const post = await res.json();
  const noOKDescription = post.firstTextBlock;
  const description = noOKDescription
    .replace(/<strong>/g, '')
    .replace(/<\/strong>/g, '')
    .replace(/<br\/>/g, '');
  return {
    props: { post, notLasthorariosBlocks, lasthorariosBlocks, description },
  };
}

export default Page
