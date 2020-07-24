import styled from 'styled-components';

const AwardsStyles = styled.span`
  display: none;
  @media (min-width: 1024px) {
    z-index: 3000;
    display: block;
    grid-column: 4;
    grid-row: 2;
    justify-self: end;
    padding-top: 4rem;
    align-self: stretch;
  }
`;

export default AwardsStyles;
