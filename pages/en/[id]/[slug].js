import api from '@libs/api';
import SingleItem from '@components/SingleItem';

const Noticia = (props) => {
  return <SingleItem data={props.sinlgePost} ruta={props.pathname} />;
};

export const getStaticPaths = async () => {
  const [posts] = await Promise.all([api.posts.getData()]);
  const paths = posts.map((f) => `/en/${f.id}/${f.slug}`);

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const [sinlgePost] = await Promise.all([api.singlePost.getData(id)]);

  return {
    props: {
      sinlgePost: [sinlgePost],
    },
    revalidate: 1,
  };
};

export default Noticia;
