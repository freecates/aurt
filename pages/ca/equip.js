import api from '@libs/api.js';
import Teams from '@components/Teams';

const Equip = (props) => {
  const {
    membres: data,
    introduccio,
    titol,
  } = props.singleTeam[0].acf;
  return (
    <Teams
      data={data}
      intro={introduccio}
      titol={titol}
      ruta={props.pathname}
    />
  );
};

export const getStaticProps = async () => {
  const id = 621;
  const [singleTeam] = await Promise.all([
    api.singleTeam.getData(id),
  ]);

  return {
    props: {
      singleTeam: [singleTeam],
    },
    revalidate: 1,
  };
};

export default Equip;
