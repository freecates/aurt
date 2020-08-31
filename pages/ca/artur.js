import fetch from 'isomorphic-unfetch';
import InnerLayout from '../../components/InnerLayout';
import Title from '../../components/styles/Title';
import SubTitle from '../../components/styles/SubTitle';
import BlockImg from '../../components/BlockImg';
import TextBlock from '../../components/styles/TextBlock';
import TextSeparator from '../../components/styles/TextSeparator';
import ItemStyles from '../../components/styles/ItemStyles';
import Head from 'next/head';

const Page = (props) => (
  <InnerLayout mainlayout>
    <Head>
      <title>AÜRT Restaurant | {props.post.title} Martínez</title>
      <meta name='description' content={props.bioTexts} />
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
        content={`AÜRT Restaurant | ${props.post.title} Martínez`}
      />
      <meta property='og:description' content={props.bioTexts} />
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
      <SubTitle>
          <BlockImg src={props.post.picture} width={173} height={173} alt={`artur martínez`} className={`with-margin`} borderRadius />
      </SubTitle>
      <Title>{props.post.title}</Title>
      <SubTitle>{props.post.subTitle}</SubTitle>
      <TextBlock>
        <div className='center'>
          <a
            href={'https://www.instagram.com/' + props.post.instagram}
            target='_blank'
            rel='noopener'
            title={'Instragram' + props.post.instagram}>
            <img loading='lazy'
              alt='logo instagram '
              src='/static/Instagram_black.svg'
              style={{
                width: '28px',
                height: '28px',
                marginRight: '.25em',
                verticalAlign: 'text-bottom',
              }}
            />
          </a>
          <a
            href={'https://www.instagram.com/' + props.post.instagram}
            target='_blank'
            rel='noopener'
            title={'Instragram' + props.post.instagram}>
            <span>@{props.post.instagram}</span>
          </a>
        </div>
      </TextBlock>
      <TextSeparator>
        <div className='here' />
      </TextSeparator>
      {props.post.bioBlocks.map((bioBlock, id) => (
        <TextBlock key={id}>
          <div
            className='center'
            dangerouslySetInnerHTML={{
              __html: bioBlock.bioText,
            }}
          />
        </TextBlock>
      ))}
    </ItemStyles>
  </InnerLayout>
);

export async function getStaticProps() {
  const res = await fetch(`https://aurtdata.now.sh/data/ca/artur.json`);
  const post = await res.json();

  const bioTexts = [
    ...new Set(
      post.bioBlocks.map(({ bioText }) =>
        bioText
          .replace(/<strong>/g, '')
          .replace(/<\/strong>/g, '')
          .replace(/<br\/>/g, ',')
      )
    ),
  ];

  return {
    props: { post, bioTexts }, // will be passed to the page component as props
  };
}

export default Page;
