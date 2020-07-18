import fetch from 'isomorphic-unfetch'
import InnerLayout from '../components/InnerLayout'
import Title from '../components/styles/Title'
import SubTitle from '../components/styles/SubTitle'
import TextBlock from '../components/styles/TextBlock'
import TextSeparator from '../components/styles/TextSeparator'
import ItemStyles from '../components/styles/ItemStyles'
import Head from 'next/head'

const Page = props => (
  <InnerLayout mainlayout>
    <Head>
      <title>AÜRT Restaurant | {props.post.title}</title>
      <meta name="description" content={props.description} />
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
      <TextSeparator>
        <div className="here" />
      </TextSeparator>
      {props.notLasthorariosBlocks.map((notLasthorariosBlock, id) => (
        <div key={id}>
          <SubTitle>{notLasthorariosBlock.title}</SubTitle>
          {notLasthorariosBlock.logo && (
            <SubTitle>
              <img
                src={notLasthorariosBlock.logo}
                style={{ width: '58px', height: '19px' }}
              />
            </SubTitle>
          )}
          <TextBlock>
            <div
              className={notLasthorariosBlock.class}
              dangerouslySetInnerHTML={{
                __html: notLasthorariosBlock.bioText
              }}
            />
          </TextBlock>
          <TextSeparator>
            <div className="here" />
          </TextSeparator>
        </div>
      ))}
      {props.lasthorariosBlocks.map((lasthorariosBlock, id) => (
        <div key={id}>
          <SubTitle>{lasthorariosBlock.title}</SubTitle>
          <TextBlock>
            <div
              className={lasthorariosBlock.class}
              dangerouslySetInnerHTML={{
                __html: lasthorariosBlock.bioText
              }}
            />
          </TextBlock>
        </div>
      ))}
    </ItemStyles>
  </InnerLayout>
)

Page.getInitialProps = async function() {
  const res = await fetch(`https://aurtdata.now.sh/data/horarios.json`)
  const post = await res.json()

  const description = [
    ...new Set(
      post.horariosBlocks.map(({ bioText }) =>
        bioText
          .replace(/<strong>/g, '')
          .replace(/<\/strong>/g, '')
          .replace(/<br\/>/g, ',')
      )
    )
  ]

  const notLasthorariosBlocks = post.horariosBlocks.slice(0, -1)

  const lasthorariosBlocks = post.horariosBlocks.slice(-1)

  return { post, notLasthorariosBlocks, lasthorariosBlocks, description }
}

export default Page
