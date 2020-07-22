import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from 'next/link';
import InnerLayout from '../components/InnerLayout';
import ItemStyles from '../components/styles/ItemStyles';
import SubTitle from '../components/styles/SubTitle';
import TextBlock from '../components/styles/TextBlock';
import TextSeparator from '../components/styles/TextSeparator';
import Title from '../components/styles/Title';

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
        href={`https://www.aurtrestaurant.com/ca/celler`}
      />
      <link
        rel='alternate'
        hrefLang={'en'}
        href={`https://www.aurtrestaurant.com/en/cellar`}
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
      <Title>{props.post.title}</Title>
      <TextSeparator>
        <div className='here' />
      </TextSeparator>
      <SubTitle
        dangerouslySetInnerHTML={{
          __html: props.post.subtitle,
        }}
      />
      <TextSeparator>
        <div className='medium here' />
      </TextSeparator>
      {props.notLastbodegaBlocks.map((notLastbodegaBlock, id) => (
        <div key={id}>
          <SubTitle>{notLastbodegaBlock.name}</SubTitle>
          <TextBlock>
            <div>
              <strong
                dangerouslySetInnerHTML={{
                  __html: notLastbodegaBlock.title,
                }}
              />
            </div>
          </TextBlock>
          <TextBlock>
            <div>
              <span
                dangerouslySetInnerHTML={{
                  __html: notLastbodegaBlock.bodegaText,
                }}
              />
            </div>
          </TextBlock>
          <TextSeparator>
            <div className='medium here' />
          </TextSeparator>
        </div>
      ))}
      {props.lastbodegaBlocks.map((lastbodegaBlock, id) => (
        <div key={id}>
          <SubTitle>{lastbodegaBlock.name}</SubTitle>
          <TextBlock>
            <div>
              <strong
                dangerouslySetInnerHTML={{
                  __html: lastbodegaBlock.title,
                }}
              />
            </div>
          </TextBlock>
          <TextBlock>
            <div>
              <span
                dangerouslySetInnerHTML={{
                  __html: lastbodegaBlock.bodegaText,
                }}
              />
            </div>
          </TextBlock>
        </div>
      ))}
      <TextSeparator>
        <div className='here' />
      </TextSeparator>
      <SubTitle>
        {' '}
        VER
        <Link href='/vinos' >
          <a>CARTA DE VINOS</a>
        </Link>
      </SubTitle>
    </ItemStyles>
  </InnerLayout>
);

export async function getStaticProps() {
  const res = await fetch(`https://aurtdata.now.sh/data/bodega.json`);
  const post = await res.json();

  const description = [
    ...new Set(
      post.bodegaBlocks.map(({ title }) =>
        title
          .replace(/<strong>/g, '')
          .replace(/<\/strong>/g, '')
          .replace(/<br\/>/g, ',')
      )
    ),
  ];

  const notLastbodegaBlocks = post.bodegaBlocks.slice(0, -1);

  const lastbodegaBlocks = post.bodegaBlocks.slice(-1);
  return {
    props: { post, notLastbodegaBlocks, lastbodegaBlocks, description },
  };
}

export default Page;
