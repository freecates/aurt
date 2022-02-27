import InnerLayout from '../../components/InnerLayout';
import Title from '../../components/styles/Title';
import SubTitle from '../../components/styles/SubTitle';
import BlockImg from '../../components/BlockImg';
import TextBlock from '../../components/styles/TextBlock';
import TextSeparator from '../../components/styles/TextSeparator';
import ItemStyles from '../../components/styles/ItemStyles';
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
        hrefLang={'en'}
        href={`https://www.aurtrestaurant.com${props.pathname.replace(
          /\/ca\//g,
          '/en/'
        )}`}
      />
      <link
        rel='alternate'
        hrefLang={'es'}
        href={`https://www.aurtrestaurant.com${props.pathname.replace(
          /\/ca\//g,
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
      {props.notLastpackBlocks.map((notLastpackBlock, id) => (
        <div key={id}>
          {notLastpackBlock.title && (
            <SubTitle>{notLastpackBlock.title}</SubTitle>
          )}
          <TextBlock>
            <div
              className={notLastpackBlock.class}
              dangerouslySetInnerHTML={{
                __html: notLastpackBlock.bioText,
              }}
            />
          </TextBlock>
        </div>
      ))}
      {props.lastpackBlocks.map((lastpackBlock, id) => (
        <div key={id}>
          <SubTitle>{lastpackBlock.title}</SubTitle>
          <TextBlock>
            <div
              className={lastpackBlock.class}
              dangerouslySetInnerHTML={{
                __html: lastpackBlock.bioText,
              }}
            />
          </TextBlock>
        </div>
      ))}
      <TextSeparator>
        <div className='here' />
      </TextSeparator>
      <SubTitle>
        <Link href='/ca/reserva'>
          <a>RESERVA AQUÍ</a>
        </Link>
      </SubTitle>
      <TextSeparator />
    </ItemStyles>
  </InnerLayout>
);

export async function getStaticProps() {
  const res = await fetch(`https://aurt-data.vercel.app/data/ca/pack.json`);
  const post = await res.json();
  const noOKDescription = post.packBlocks[0].bioText;
  const description = noOKDescription
    .replace(/<strong>/g, '')
    .replace(/<\/strong>/g, '')
    .replace(/<br\/>/g, '');

  const notLastpackBlocks = post.packBlocks.slice(0, -1);

  const lastpackBlocks = post.packBlocks.slice(-1);
  return {
    props: { post, notLastpackBlocks, lastpackBlocks, description },
  };
}

export default Page;
