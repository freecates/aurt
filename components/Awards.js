import AwardsStyles from './styles/AwardsStyles';

const wpAssetsUrl = 'https://wp.aurtrestaurant.com/wp-content/uploads/';

const Awards = (props) => {
  const { ruta } = props;
  return (
    <AwardsStyles>
      {ruta == '/' || ruta == '/ca' || ruta == '/en' ? (
        <img
          className={'home'}
          loading='lazy'
          src={`${wpAssetsUrl}/awards/awards-home.svg`}
          alt='aürt awards'
          height='83'
          width='400'
        />
      ) : ruta == '/artur' || ruta == '/ca/artur' || ruta == '/en/artur' ? (
        <img
          className={'artur'}
          loading='lazy'
          src={`${wpAssetsUrl}/awards/awards-artur-aurt.svg`}
          alt='artur aürt awards'
          height='70'
          width='345'
        />
      ) : (
        <img
          className={'others'}
          loading='lazy'
          src={`${wpAssetsUrl}/awards/awards-aurt-2023.svg`}
          alt='aürt awards'
          height='500'
          width='263'
        />
      )}
    </AwardsStyles>
  );
};

export default Awards;
