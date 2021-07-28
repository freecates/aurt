import styled from 'styled-components';
import InnerLayout from './InnerLayout';

const ThanksStyle = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 5rem;
  background: #ffffff;
  max-width: 60rem;
`;

const Title = styled.h1`
  margin: 1rem auto;
  text-transform: uppercase;
  text-align: center;
  line-height: 2.9rem;
  font-size: 2.2rem;
  letter-spacing: 0.1em;
  color: #000000;
`;

const ThanksGift = () => (
  <InnerLayout layout>
    <ThanksStyle>
      <>
        <Title>Thanks For Buying a Gift Voucher!</Title>
        <p>We hope to see you soon</p>
      </>

      <>
        <Title>¡Gracias Por Comprar una Targeta Regalo!</Title>
        <p>Esperamos verte pronto</p>
      </>

      <>
        <Title>Gràcies Per Comprar una Targeta Regal!</Title>
        <p>Esperem veure't aviat</p>
      </>
    </ThanksStyle>
  </InnerLayout>
);

export default ThanksGift;
