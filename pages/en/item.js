import SingleItem from '../../components/SingleItem';

const Item = (props) => {
  return (
    <div>
      <SingleItem id={props.query.id} ruta={props.pathname} />
    </div>
  );
};

export default Item;
