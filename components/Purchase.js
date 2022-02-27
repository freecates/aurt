import React from 'react';
import styled from 'styled-components';
import InnerLayout from './InnerLayout';
import TextBlock from './styles/TextBlock';
import SingleModal from './SingleModal';
import ReservaIframe from './ReservaIframe';

const WhiteTitle = styled.h2`
  color: #ffffff;
  text-align: left;
  text-transform: uppercase;
  margin: 3rem 1rem 3rem 1rem;

  @media (max-width: 960px) {
    margin: 3rem 7.5%;
  }
`;
const TextBlockNoMargin = styled(TextBlock)`
  margin: 0 1rem;
  a {
    color: #ffffff;
    text-decoration: none;
    border-bottom: 1px solid #ffffff;
    padding-bottom: 2px;
    text-transform: uppercase;
  }
  p.no-margin {
    margin: 0;
  }
  p:last-child {
    margin-bottom: 1em;
  }
  .left a {
    color: ${(props) => props.theme.lightBrown};
    text-decoration: underline;
  }

  @media (max-width: 960px) {
    margin: 0 7.5%;
  }
`;

const Purchase = (props) => (
  <InnerLayout layout ruta={props.ruta} name={props.name}>
    {props.ruta.includes('/en') && <WhiteTitle>Buy Gift Voucher</WhiteTitle>}
    {props.ruta.includes('/ca') && <WhiteTitle>Compreu Targeta Regal</WhiteTitle>}
    {props.ruta.indexOf('/ca') == -1 && props.ruta.indexOf('/en') == -1 && (
      <WhiteTitle>Comprar Tarjeta Regalo</WhiteTitle>
    )}

    <React.Fragment>
      <ReservaIframe ruta={props.ruta} url={props.url} />
    </React.Fragment>
  </InnerLayout>
);

export default Purchase;
