import BodegaPdf from '../components/BodegaPdf';

const CartaDeVinos = (props) => (
  <div>
    <BodegaPdf ruta={props.pathname} />
  </div>
);

export default CartaDeVinos;
