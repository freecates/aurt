import fetch from 'isomorphic-unfetch';
import InnerLayout from '../components/InnerLayout';
import Title from '../components/styles/Title';
import SubTitle from '../components/styles/SubTitle';
import TextBlock from '../components/styles/TextBlock';
import BlockImg from '../components/BlockImg';
import TextSeparator from '../components/styles/TextSeparator';
import ItemStyles from '../components/styles/ItemStyles';
import Head from 'next/head';
import Link from 'next/link';

const RegalaES = (props) => (
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
      <Title
        dangerouslySetInnerHTML={{
          __html: props.post.title,
        }}
      />
      <TextSeparator>
        <div className='here' />
      </TextSeparator>
      <Title>
        <BlockImg
          src={props.post.logo}
          width={'800'}
          height={'300'}
          alt={props.post.title}
        />
      </Title>
      {props.notLastregalaBlocks.map((notLastregalaBlock, id) => (
        <div key={id}>
          {notLastregalaBlock.title && (
            <SubTitle>{notLastregalaBlock.title}</SubTitle>
          )}
          <TextBlock>
            <div
              className={notLastregalaBlock.class}
              dangerouslySetInnerHTML={{
                __html: notLastregalaBlock.bioText,
              }}
            />
          </TextBlock>
        </div>
      ))}
      {props.lastregalaBlocks.map((lastregalaBlock, id) => (
        <div key={id}>
          <SubTitle>{lastregalaBlock.title}</SubTitle>
          <TextBlock>
            <div
              className={lastregalaBlock.class}
              dangerouslySetInnerHTML={{
                __html: lastregalaBlock.bioText,
              }}
            />
          </TextBlock>
        </div>
      ))}
      <TextSeparator>
        <div className='here' />
      </TextSeparator>
      <SubTitle>
        <Link href='/reserva'>
          <a>RESERVA AQUÍ</a>
        </Link>
      </SubTitle>
      <TextSeparator />
    </ItemStyles>
  </InnerLayout>
);

export async function getStaticProps() {
  const res = await fetch(`https://aurt-data.vercel.app/data/regala.json`);
  const post = await res.json();
  const noOKDescription = post.regalaBlocks[0].bioText;
  const description = noOKDescription
    .replace(/<strong>/g, '')
    .replace(/<\/strong>/g, '')
    .replace(/<br\/>/g, '');

  const notLastregalaBlocks = post.regalaBlocks.slice(0, -1);

  const lastregalaBlocks = post.regalaBlocks.slice(-1);
  return {
    props: { post, notLastregalaBlocks, lastregalaBlocks, description },
  };
}

export default RegalaES;
