import api from '@libs/api.js';
import Items from '../components/Items';

const Blog = (props) => {
  return (
    <div>
      <Items ruta={props.pathname} data={props.data} />
    </div>
  );
};

export const getStaticProps = async () => {
  const [posts] = await Promise.all([
    api.posts.getData(),
  ]);

  return {
    props: {
      data: posts,
    },
    revalidate: 1,
  };
};

export default Blog;
