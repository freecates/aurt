import AwardsStyles from './styles/AwardsStyles';
import Image from 'next/image';

const Awards = (props) => {
  const { ruta } = props;
  return (
    <AwardsStyles>
      {ruta == '/' || ruta == '/ca' || ruta == '/en' ? (
        <Image className={'home'} loading='lazy' src='/static/awards-home.svg' alt='aürt awards' height='130' width='362' />
      ) : ruta == '/artur' || ruta == '/ca/artur' || ruta == '/en/artur' ? (
        <Image className={'artur'} loading='lazy'
          src='/static/awards-artur-aurt.svg'
          alt='artur aürt awards'
          height='100'
          width='279'
        />
      ) : (
        <Image className={'others'} loading='lazy' src='/static/awards-aurt.svg' alt='aürt awards' height='100' width='172' />
      )}
    </AwardsStyles>
  );
};

export default Awards;
