import BodegaPdf from '../../components/BodegaPdf';

const CartaDeVins = (props) => (
  <div>
    <BodegaPdf ruta={props.pathname} />
  </div>
);

export default CartaDeVins;
