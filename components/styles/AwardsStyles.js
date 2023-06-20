import styled from 'styled-components';

const AwardsStyles = styled.span`
  grid-column: 4;
  grid-row: 2;
  justify-self: end;
  align-self: stretch;
  margin-top: -2rem;
  img {
    height: auto;
    width: 100%;
    max-width: 263px;
    &.home {
      margin-top: 4rem;
      margin-right: 1.5rem;
    }
    &.artur,
    &.others {
      margin-right: 10rem;
    }
  }
  
  @media (min-width: 768px) {
    z-index: 3000;
    margin-top: 4rem;
    img {
      &.home {
        height: 83.2px;
        margin-right: 0;
      }
      &.artur,
      &.others {
        margin-right: 0;
      }
    }
  }
`;

export default AwardsStyles;
