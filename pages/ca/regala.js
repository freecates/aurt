import api from '@libs/api.js';
import Gift from '@components/Gift';

const RegalaCA = (props) => {
  const {
    text_del_menu_regal: data,
    voucher,
    titol,
  } = props.singleGiftData[0].acf;
  return <Gift data={data} voucher={voucher} titol={titol} ruta={props.pathname} />;
};

export const getStaticProps = async () => {
  const id = 571;
  const [singleGiftMenu] = await Promise.all([api.singleGiftMenu.getData(id)]);

  return {
    props: {
      singleGiftData: [singleGiftMenu],
    },
    revalidate: 1,
  };
};

export default RegalaCA;
