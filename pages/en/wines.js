import BodegaPdf from '../../components/BodegaPdf';

const WinesList = (props) => (
  <div>
    <BodegaPdf ruta={props.pathname} />
  </div>
);

export default WinesList;
