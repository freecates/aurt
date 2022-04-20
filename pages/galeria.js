import Head from 'next/head';
import api from '@libs/api.js';
import InnerLayout from '@components/InnerLayout';
import GalleryComponnet from '@components/Gallery';
import TextSeparator from '@components/styles/TextSeparator';
import Title from '@components/styles/Title';

const Galeria = ({ data, pathname }) => (
  <InnerLayout mainlayout>
    <Head>
      <title>AURT | Galería</title>
      <link
        rel='canonical'
        href={`https://www.aurtrestaurant.com${pathname}`}
      />
      <link
        rel='alternate'
        hrefLang={'es'}
        href={`https://www.aurtrestaurant.com${pathname.replace(
          /\/ca\//g,
          '/'
        )}`}
      />
    </Head>
    <Title>Galería</Title>
    <TextSeparator>
      <div className='here' />
    </TextSeparator>
    <GalleryComponnet data={data} />
  </InnerLayout>
);

export const getStaticProps = async () => {
  const id = 668;
  const [singleGallery] = await Promise.all([api.singleGallery.getData(id)]);

  return {
    props: {
      data: singleGallery.acf.galeria,
    },
    revalidate: 1,
  };
};

export default Galeria;
