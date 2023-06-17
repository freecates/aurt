import Aurts from '@components/Aurts';
import api from '@libs/api.js';

const Aurt = (props) => {
  const {
    aurt: data,
    logo_aurt: logo 
  } = props.singleFromCMS[0].acf;
  return (
    <Aurts
      data={data}
      logo={logo}
      ruta={props.pathname}
    />
  );
};

export const getStaticProps = async () => {
  const id = 749;
  const [singleFromCMS] = await Promise.all([
    api.singleFromCMS.getData(id, 'aurt'),
  ]);

  return {
    props: {
      singleFromCMS: [singleFromCMS],
    },
    revalidate: 1,
  };
};

export default Aurt;
