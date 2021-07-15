import fetch from 'isomorphic-unfetch';
import InnerLayout from '../../components/InnerLayout';
import Title from '../../components/styles/Title';
import SubTitle from '../../components/styles/SubTitle';
import BlockImg from '../../components/BlockImg';
import TextBlock from '../../components/styles/TextBlock';
import TextSeparator from '../../components/styles/TextSeparator';
import ItemStyles from '../../components/styles/ItemStyles';
import Head from 'next/head';
import Link from 'next/link';

const GiftEN = (props) => (
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
          /\/en\//g,
          '/ca/'
        )}`}
      />
      <link
        rel='alternate'
        hrefLang={'es'}
        href={`https://www.aurtrestaurant.com${props.pathname.replace(
          /\/en\//g,
          '/'
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
      {props.notLastgiftBlocks.map((notLastgiftBlock, id) => (
        <div key={id}>
          {notLastgiftBlock.title && (
            <SubTitle>{notLastgiftBlock.title}</SubTitle>
          )}
          <TextBlock>
            <div
              className={notLastgiftBlock.class}
              dangerouslySetInnerHTML={{
                __html: notLastgiftBlock.bioText,
              }}
            />
          </TextBlock>
        </div>
      ))}
      {props.lastgiftBlocks.map((lastgiftBlock, id) => (
        <div key={id}>
          <SubTitle>{lastgiftBlock.title}</SubTitle>
          <TextBlock>
            <div
              className={lastgiftBlock.class}
              dangerouslySetInnerHTML={{
                __html: lastgiftBlock.bioText,
              }}
            />
          </TextBlock>
        </div>
      ))}
      <TextSeparator>
        <div className='here' />
      </TextSeparator>
      <SubTitle>
        <Link href='/en/buy'>
          <a>BUY HERE</a>
        </Link>
      </SubTitle>
      <TextSeparator />
    </ItemStyles>
  </InnerLayout>
);

export async function getStaticProps() {
  const res = await fetch(`https://aurt-data.vercel.app/data/en/gift.json`);
  const post = await res.json();
  const noOKDescription = post.giftBlocks[0].bioText;
  const description = noOKDescription
    .replace(/<strong>/g, '')
    .replace(/<\/strong>/g, '')
    .replace(/<br\/>/g, '');

  const notLastgiftBlocks = post.giftBlocks.slice(0, -1);

  const lastgiftBlocks = post.giftBlocks.slice(-1);
  return {
    props: { post, notLastgiftBlocks, lastgiftBlocks, description },
  };
}

export default GiftEN;
