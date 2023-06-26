import Gastronomies from '@components/Gastronomies';
import api from '@libs/api.js';

const Gastronomia = (props) => {
  const {
    gastronomia: data,
    titol 
  } = props.singleFromCMS[0].acf;
  return (
    <Gastronomies
      data={data}
      titol={titol}
      ruta={props.pathname}
    />
  );
};

export const getStaticProps = async () => {
  const id = 774;
  const [singleFromCMS] = await Promise.all([
    api.singleFromCMS.getData(id, 'gastronomy'),
  ]);

  return {
    props: {
      singleFromCMS: [singleFromCMS],
    },
    revalidate: 1,
  };
};

export default Gastronomia;
