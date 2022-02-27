import api from '@libs/api.js';
import Artur from '@components/Artur';

const ArturEN = (props) => {
  const {
    llistat_de_reconeixements: data,
    titol,
    subtitol,
    instagram,
    imatge,
  } = props.singleArturRecognition[0].acf;
  return (
    <Artur
      data={data}
      titol={titol}
      subtitol={subtitol}
      instagram={instagram}
      imatge={imatge}
      ruta={props.pathname}
    />
  );
};

export const getStaticProps = async () => {
  const id = 588;
  const [singleArturRecognition] = await Promise.all([
    api.singleArturRecognition.getData(id),
  ]);

  return {
    props: {
      singleArturRecognition: [singleArturRecognition],
    },
    revalidate: 1,
  };
};

export default ArturEN;
