import Beginnings from '@components/Beginnings';
import api from '@libs/api.js';

const Origen = (props) => {
  const {
    origen: data,
    signatura: logo,
    titol,
    subtitol 
  } = props.singleFromCMS[0].acf;
  return (
    <Beginnings
      data={data}
      logo={logo}
      titol={titol}
      subtitol={subtitol}
      ruta={props.pathname}
    />
  );
};

export const getStaticProps = async () => {
  const id = 767;
  const [singleFromCMS] = await Promise.all([
    api.singleFromCMS.getData(id, 'beginning'),
  ]);

  return {
    props: {
      singleFromCMS: [singleFromCMS],
    },
    revalidate: 1,
  };
};

export default Origen;
