import styled from 'styled-components'

const Hamburger = styled.div`
  .burger-menu,
  .burger-menu.open {
    display: inline-block;
    cursor: pointer;
    position: relative;
    z-index: 3000;
    background: #fff;
    padding: 10px;
  }

  .burger-menu .bar1,
  .bar2,
  .bar3 {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 4px 0;
    transition: 0.4s;
  }

  .burger-menu.open .bar1 {
    -webkit-transform: rotate(-45deg) translate(-4px, 4px);
    transform: rotate(-45deg) translate(-4px, 4px);
  }

  .burger-menu.open .bar2 {
    opacity: 0;
  }

  .burger-menu.open .bar3 {
    -webkit-transform: rotate(45deg) translate(-6px, -6px);
    transform: rotate(45deg) translate(-6px, -6px);
  }
`

export default Hamburger
