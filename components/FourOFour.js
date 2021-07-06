import Link from 'next/link';
import styled from 'styled-components';
import Title from './styles/Title';
import TextSeparator from './styles/TextSeparator';
import TextBlock from './styles/TextBlock';
import InnerLayout from './InnerLayout';

const FourOFourStyle = styled.div`
  max-width: 50rem;
  margin: 0 auto;
`;

const FourOFour = () => (
  <InnerLayout mainlayout>
    <FourOFourStyle>
      <TextSeparator>
        <div className='here' />
      </TextSeparator>
      <Title>404!</Title>
      <TextBlock>
        <p>
          [CA] Ep! Això que has demanat no existeix. Millor{' '}
          <Link href='/ca'>torna a la pàgina d'inici</Link>.
        </p>
        <p>
          [EN] Oops! There's nothing here.{' '}
          <Link href='/en'>Better come back home.</Link>
        </p>
        <p>
          [ES] ¡Ups! Esto no existe.{' '}
          <Link href='/'>Mejor regresa a la página de inicio</Link>.
        </p>
      </TextBlock>
    </FourOFourStyle>
  </InnerLayout>
);

export default FourOFour;
