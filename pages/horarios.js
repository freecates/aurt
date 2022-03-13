import api from '@libs/api.js';
import Openings from '@components/Openings';

const Horarios = (props) => {
  const {
    opening: data,
    titol,
  } = props.singleOpening[0].acf;
  return (
    <Openings
      data={data}
      titol={titol}
      ruta={props.pathname}
    />
  );
};

export const getStaticProps = async () => {
  const id = 594;
  const [singleOpening] = await Promise.all([
    api.singleOpening.getData(id),
  ]);

  return {
    props: {
      singleOpening: [singleOpening],
    },
    revalidate: 1,
  };
};

export default Horarios;
