import fetch from 'isomorphic-unfetch';
import InnerLayout from '../components/InnerLayout';
import Title from '../components/styles/Title';
import SubTitle from '../components/styles/SubTitle';
import TextBlock from '../components/styles/TextBlock';
import TextSeparator from '../components/styles/TextSeparator';
import ItemStyles from '../components/styles/ItemStyles';
import Head from 'next/head';
import Link from 'next/link';

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
        <img src={props.post.logo} style={{ width: '268px', height: '85px' }} />
      </Title>
      <TextSeparator>
        <div className='here' />
      </TextSeparator>
      {props.notLastmaiBlocks.map((notLastmaiBlock, id) => (
        <div key={id}>
          {notLastmaiBlock.logo && (
            <SubTitle>
              <img
                src={notLastmaiBlock.logo}
                style={{ width: '58px', height: '19px' }}
              />
            </SubTitle>
          )}
          {notLastmaiBlock.title && (
            <SubTitle>{notLastmaiBlock.title}</SubTitle>
          )}
          <TextBlock>
            <div
              className={notLastmaiBlock.class}
              dangerouslySetInnerHTML={{
                __html: notLastmaiBlock.bioText,
              }}
            />
          </TextBlock>
          <TextBlock>
            <div
              className={notLastmaiBlock.class}
              dangerouslySetInnerHTML={{
                __html: notLastmaiBlock.schedule,
              }}
            />
          </TextBlock>
          <TextSeparator>
            <div className='here' />
          </TextSeparator>
        </div>
      ))}
      {props.lastmaiBlocks.map((lastmaiBlock, id) => (
        <div key={id}>
          <SubTitle>{lastmaiBlock.title}</SubTitle>
          <TextBlock>
            <div
              dangerouslySetInnerHTML={{
                __html: lastmaiBlock.bioText,
              }}
            />
          </TextBlock>
        </div>
      ))}
      <TextSeparator>
        <div className='here' />
      </TextSeparator>
      <SubTitle>
        {' '}
        VER
        <Link href='/menu-mai'>
          <a>CARTA MA'I</a>
        </Link>
      </SubTitle>
      <TextSeparator />
    </ItemStyles>
  </InnerLayout>
);

export async function getStaticProps() {
  const res = await fetch(`https://aurtdata.now.sh/data/mai.json`);
  const post = await res.json();
  const noOKDescription = post.maiBlocks[0].bioText;
  const description = noOKDescription
    .replace(/<strong>/g, '')
    .replace(/<\/strong>/g, '')
    .replace(/<br\/>/g, '');

  const notLastmaiBlocks = post.maiBlocks.slice(0, -1);

  const lastmaiBlocks = post.maiBlocks.slice(-1);
  return {
    props: { post, notLastmaiBlocks, lastmaiBlocks, description },
  };
}

export default Page;
