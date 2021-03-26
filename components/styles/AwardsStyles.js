import styled from 'styled-components';

const AwardsStyles = styled.span`
  grid-column: 4;
  grid-row: 2;
  justify-self: end;
  align-self: stretch;
  margin-top: -2rem;
  img {
    height: 50px;
    width: auto;
    &.home {
      margin-top: 4rem;
      margin-right: 1.5rem;
    }
    &.artur,
    &.others {
      margin-right: 2rem;
    }
  }
  
  @media (min-width: 768px) {
    z-index: 3000;
    margin-top: 4rem;
    img {
      &.home {
        height: 104px;
        margin-right: 0;
      }
      &.artur,
      &.others {
        height: 80px;
        margin-right: 0;
      }
    }
  }
`;

export default AwardsStyles;
