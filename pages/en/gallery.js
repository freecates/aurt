import Head from 'next/head';
import InnerLayout from '../../components/InnerLayout';
import MediaItems, { MEDIA_ITEMS_QUERY } from '../../components/MediaItems';
import TextSeparator from '../../components/styles/TextSeparator';
import Title from '../../components/styles/Title';
import { initializeApollo } from '../../lib/apolloClient';

const Gallery = (props) => (
  <InnerLayout mainlayout>
    <Head>
      <title>AURT | Gallery</title>
    </Head>
    <Title>GAllery</Title>
    <TextSeparator>
      <div className='here' />
    </TextSeparator>
    <MediaItems ruta={props.pathname} />
  </InnerLayout>
);

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: MEDIA_ITEMS_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 1,
  };
}

export default Gallery;
