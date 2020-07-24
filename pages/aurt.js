import fetch from 'isomorphic-unfetch';
import InnerLayout from '../components/InnerLayout';
import Title from '../components/styles/Title';
import SubTitle from '../components/styles/SubTitle';
import TextBlock from '../components/styles/TextBlock';
import TextSeparator from '../components/styles/TextSeparator';
import ItemStyles from '../components/styles/ItemStyles';
import Head from 'next/head';

const Page = (props) => (
  <InnerLayout mainlayout>
    <Head>
      <title>AÜRT Restaurant | {props.post.title}</title>
      <meta name='description' content={props.description} />
      <link
        rel='canonical'
        href={`https://www.aurtrestaurant.com${props.pathname}`}
      />
      <link
        rel='alternate'
        hrefLang={'ca'}
        href={`https://www.aurtrestaurant.com${props.pathname.replace(
          /\//g,
          '/ca/'
        )}`}
      />
      <link
        rel='alternate'
        hrefLang={'en'}
        href={`https://www.aurtrestaurant.com${props.pathname.replace(
          /\//g,
          '/en/'
        )}`}
      />
      <meta
        property='og:url'
        content={`https://www.aurtrestaurant.com${props.pathname}`}
      />
      <meta property='og:type' content='article' />
      <meta
        property='og:title'
        content={`AÜRT Restaurant | ${props.post.title}`}
      />
      <meta property='og:description' content={props.description} />
      <meta
        property='og:image'
        content={
          'https://www.aurtrestaurant.com/static/icons/og-image-aurt-web.png'
        }
      />
      <meta property='og:image:width' content='1024' />
      <meta property='og:image:height' content='1024' />
    </Head>
    <ItemStyles>
      <Title>
        <img loading='lazy' src={props.post.logo} style={{ width: '268px', height: '85px' }} />
      </Title>
      <TextSeparator>
        <div className='here' />
      </TextSeparator>
      {props.notLastaurtBlocks.map((notLastaurtBlock, id) => (
        <div key={id}>
          <SubTitle>{notLastaurtBlock.title}</SubTitle>
          {notLastaurtBlock.logo && (
            <SubTitle>
              <img loading='lazy'
                src={notLastaurtBlock.logo}
                style={{ width: '58px', height: '19px' }}
              />
            </SubTitle>
          )}
          <TextBlock>
            <div
              dangerouslySetInnerHTML={{
                __html: notLastaurtBlock.bioText,
              }}
            />
          </TextBlock>
          <TextSeparator>
            <div className='here' />
          </TextSeparator>
        </div>
      ))}
      {props.lastaurtBlocks.map((lastaurtBlock, id) => (
        <div key={id}>
          <SubTitle>{lastaurtBlock.title}</SubTitle>
          <TextBlock>
            <div
              dangerouslySetInnerHTML={{
                __html: lastaurtBlock.bioText,
              }}
            />
          </TextBlock>
        </div>
      ))}
    </ItemStyles>
  </InnerLayout>
);

export async function getStaticProps() {
  const res = await fetch(`https://aurtdata.now.sh/data/aurt.json`);
  const post = await res.json();
  const noOKDescription = post.aurtBlocks[0].bioText;
  const description = noOKDescription
    .replace(/<strong>/g, '')
    .replace(/<\/strong>/g, '');

  const notLastaurtBlocks = post.aurtBlocks.slice(0, -1);

  const lastaurtBlocks = post.aurtBlocks.slice(-1);

  return {
    props: { post, notLastaurtBlocks, lastaurtBlocks, description }, // will be passed to the page component as props
  };
}

export default Page;
