import AwardsStyles from './styles/AwardsStyles';

const Awards = (props) => {
  const { ruta } = props;
  return (
    <AwardsStyles>
      {ruta == '/' || ruta == '/ca' || ruta == '/en' ? (
        <img className={'home'} loading='lazy' src='/static/awards-home.svg' alt='aürt awards' height='104' width='500' />
      ) : ruta == '/artur' || ruta == '/ca/artur' || ruta == '/en/artur' ? (
        <img className={'artur'} loading='lazy'
          src='/static/awards-artur-aurt.svg'
          alt='artur aürt awards'
          height='80'
          width='386'
        />
      ) : (
        <img className={'others'} loading='lazy' src='/static/awards-aurt.svg' alt='aürt awards' height='100' width='172' />
      )}
    </AwardsStyles>
  );
};

export default Awards;
