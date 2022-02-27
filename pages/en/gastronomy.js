import InnerLayout from '../../components/InnerLayout';
import Title from '../../components/styles/Title';
import SubTitle from '../../components/styles/SubTitle';
import TextBlock from '../../components/styles/TextBlock';
import TextSeparator from '../../components/styles/TextSeparator';
import ItemStyles from '../../components/styles/ItemStyles';
import Head from 'next/head';

const Gastronomy = (props) => (
  <InnerLayout mainlayout>
    <Head>
      <title>AÜRT Restaurant | {props.post.title}</title>
      <meta name='description' content={props.post.secondTextBlock} />
      <meta
        property='og:url'
        content={`https://www.aurtrestaurant.com${props.pathname}`}
      />
      <meta property='og:type' content='article' />
      <meta
        property='og:title'
        content={`AÜRT Restaurant | ${props.post.title}`}
      />
      <meta property='og:description' content={props.post.secondTextBlock} />
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
      <SubTitle
        dangerouslySetInnerHTML={{
          __html: props.post.subTitle,
        }}
      />
      <SubTitle>{props.post.secondSubTitle}</SubTitle>
      <TextSeparator>
        <div className='here' />
      </TextSeparator>
      <TextBlock
        dangerouslySetInnerHTML={{
          __html: props.post.firstTextBlock,
        }}
      />
      <TextBlock
        dangerouslySetInnerHTML={{
          __html: props.post.secondTextBlock,
        }}
      />
    </ItemStyles>
  </InnerLayout>
);

export async function getStaticProps() {
  const res = await fetch(`https://aurt-data.vercel.app/data/en/gastronomy.json`);
  const post = await res.json();

  return {
    props: { post }, // will be passed to the page component as props
  };
}

export default Gastronomy;
