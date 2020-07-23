import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import InnerLayout from '../components/InnerLayout'
import Blockquote from '../components/styles/Blockquote'
import ItemStyles from '../components/styles/ItemStyles'
import SubTitle from '../components/styles/SubTitle'
import TextBlock from '../components/styles/TextBlock'
import TextSeparator from '../components/styles/TextSeparator'
import Title from '../components/styles/Title'

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
    <ItemStyles>
      <Title>{props.post.title}</Title>
      <SubTitle>{props.post.subTitle}</SubTitle>
      <TextSeparator>
        <div className="here" />
      </TextSeparator>
      <TextBlock
        dangerouslySetInnerHTML={{
          __html: props.post.firstTextBlock
        }}
      />
      <TextBlock
        dangerouslySetInnerHTML={{
          __html: props.post.secondTextBlock
        }}
      />
      <Blockquote>
        <h2>{props.post.blockQuote}</h2>
      </Blockquote>
      <TextSeparator>
        <div className="here" />
      </TextSeparator>
      <TextBlock
        dangerouslySetInnerHTML={{
          __html: props.post.thirdTextBlock
        }}
      />
      <TextBlock
        dangerouslySetInnerHTML={{
          __html: props.post.fourthTextBlock
        }}
      />
      <TextSeparator>
        <div className="here" />
      </TextSeparator>
      <Blockquote>
        <h2>{props.post.blockQuoteSecond}</h2>
      </Blockquote>
      <TextBlock
        dangerouslySetInnerHTML={{
          __html: props.post.fifthTextBlock
        }}
      />
      <TextBlock>
        <div
          className="with-margin"
          dangerouslySetInnerHTML={{
            __html: props.post.sixthTextBlock
          }}
        />
      </TextBlock>
    </ItemStyles>
  </InnerLayout>
)

export async function getStaticProps() {
  const res = await fetch(`https://aurtdata.now.sh/data/origen.json`)
  const post = await res.json()
  const noOKDescription = post.firstTextBlock
  const description = noOKDescription
    .replace(/<strong>/g, '')
    .replace(/<\/strong>/g, '')
    .replace(/<br\/>/g, '')
  return {
    props: {post, description}, // will be passed to the page component as props
  }
}

export default Page
