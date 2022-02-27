import api from '@libs/api.js';
import TastingMenu from '@components/TastingMenu';

const MenuDegustacio = (props) => {
  const ruta = props.pathname;
  const { contingut_del_menu: data } = props.singleTastingData[0].acf;
  return (
    <>
      <TastingMenu ruta={ruta} data={data} />
    </>
  );
};

export const getStaticProps = async () => {
  const id = 560;
  const [singleTastingMenu] = await Promise.all([
    api.singleTastingMenu.getData(id),
  ]);

  return {
    props: {
      singleTastingData: [singleTastingMenu],
    },
    revalidate: 1,
  };
};

export default MenuDegustacio;
