import BodegaPdf from '../../components/BodegaPdf';

const CartaDeVins = (props) => (
  <div>
    <BodegaPdf ruta={props.pathname} file={ props.file }/>
  </div>
);

export async function getStaticProps() {
  const file = 'https://wp.aurtrestaurant.com/wp-content/uploads/bodega-aurt/bodega-aurt-ca.pdf';

  return {
    props: { file }, // will be passed to the page component as props
  };
}

export default CartaDeVins;