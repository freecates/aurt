import fetch from 'isomorphic-unfetch';
import InnerLayout from '../../components/InnerLayout';
import Title from '../../components/styles/Title';
import TextSeparator from '../../components/styles/TextSeparator';
import ItemStyles from '../../components/styles/ItemStyles';
import Head from 'next/head';

const Page = (props) => (
  <InnerLayout mainlayout>
    <Head>
      <title>AÜRT Restaurant | Newsletter Signup</title>
      <meta name='description' content={'Newsletter Signup'} />
      <link
        rel='canonical'
        href={`https://www.aurtrestaurant.com${props.pathname}`}
      />
      <link
        rel='alternate'
        hrefLang={'es'}
        href={`https://www.aurtrestaurant.com/alta-newsletter`}
      />
      <link
        rel='alternate'
        hrefLang={'ca'}
        href={`https://www.aurtrestaurant.com/ca/alta-newsletter`}
      />
      <meta
        property='og:url'
        content={`https://www.aurtrestaurant.com${props.pathname}`}
      />
      <meta property='og:type' content='article' />
      <meta
        property='og:title'
        content={`AÜRT Restaurant | Newsletter Signup`}
      />
      <meta property='og:description' content={'Newsletter Signup'} />
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
      <Title>Newsletter Signup</Title>
      <TextSeparator>
        <div className='here' />
      </TextSeparator>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </ItemStyles>
  </InnerLayout>
);

export async function getStaticProps() {
  const res = await fetch(`https://aurtdata.now.sh/data/en/mailchimp.html`);
  const content = await res.text();
  return {
    props: { content },
  };
}

export default Page;
