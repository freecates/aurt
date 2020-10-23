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
      <Title>       
        <BlockImg src={props.post.logo} width={'258'} height={'85'} alt={props.post.title}/>
      </Title>
      <TextSeparator>
        <div className='here' />
      </TextSeparator>
      {props.notLastmaiBlocks.map((notLastmaiBlock, id) => (
        <div key={id}>
          {notLastmaiBlock.logo && (
            <SubTitle>
              <BlockImg src={notLastmaiBlock.logo} width={'58'} height={'19'} alt={notLastmaiBlock.title}/>
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
        SEE
        <Link href='/en/menu-mai'>
          <a>CARTE MA'I</a>
        </Link>
      </SubTitle>
      <TextSeparator />
    </ItemStyles>
  </InnerLayout>
);

export async function getStaticProps() {
  const res = await fetch(`https://aurt-data.vercel.app/data/en/mai.json`);
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
