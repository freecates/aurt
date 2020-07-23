import AwardsStyles from './styles/AwardsStyles';

const Awards = (props) => {
  const { ruta } = props;
  return (
    <>
      {ruta == '/' || ruta == '/ca' || ruta == '/en' ? (
        <AwardsStyles>
          <img src='/static/awards-home.svg' alt='aürt awards' height='130' />
        </AwardsStyles>
      ) : (
        ''
      )}
    </>
  );
};

export default Awards;
