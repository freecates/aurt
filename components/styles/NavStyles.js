import styled from 'styled-components'

const NavStyles = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: center;
  h4 {
    margin-block-start: auto;
    margin-block-end: auto;
    font-size: 1.6rem;
    line-height: 2.1rem;
    display: inline-block;
    position: relative;
  }
  section + section {
    padding-left: 0.3em;
  }
  section + section::before {
    content: '';
    border-left: 1px solid #000;
    position: relative;
    height: 50%;
    left: 0;
    bottom: 0;
  }
  a.item,
  button {
    padding: 1rem 3rem;
    letter-spacing: 0.25em;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    background: none;
    border: 0;
    cursor: pointer;
    @media (max-width: 700px) {
      font-size: 1.3rem;
      line-height: 1.7rem;
      padding: 0 10px;
    }
    &:before {
      content: '';
      width: 2px;
      background: ${props => props.theme.lightgrey};
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: ${props => props.theme.black};
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
    &.no-link {
      color: #dad9d9;
      &:after {
        display: none;
      }
    }
  }
  @media (max-width: 1300px) {
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`

export default NavStyles
