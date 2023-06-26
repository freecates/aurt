import styled from 'styled-components'
import FooterFirst from './FooterFirst'
import FooterFourth from './FooterFourth'
import FooterSecond from './FooterSecond'
import FooterThird from './FooterThird'

const StyleHeader = styled.footer`
  .bar {
    display: grid;
    grid-template-columns: minmax(auto, 5vw) 1fr 1fr 1fr minmax(auto, 5vw);
    justify-content: space-between;
    align-items: end;
    .first {
      grid-column: 2;
      justify-self: start;
    }
    .fourth {
      grid-column: 3;
      justify-self: center;
    }
    .second {
      grid-column: 4;
      justify-self: end;
    }
    @media (min-width: 1024px) {
      .third {
        display: none;
      }
    }
    @media (min-width: 1360px) {
      .first {
        margin-left: 3rem;
      }
      .second {
        margin-right: 3rem;
      }
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      justify-content: center;
      .first {
        grid-column: 1;
        justify-self: start;
        margin: 0 7.5%;
      }
      .second {
        grid-column: 1;
        justify-self: start;
        margin-left: 7.5%;
        margin-bottom: 55px;
      }
      .fourth {
        grid-column: 1;
        justify-self: start;
        margin-left: 7.5%;
      }
      .third {
        grid-column: 1;
        justify-self: center;
        text-align: center;
        width: 100%;
        color: #ffffff;
        position: fixed;
        z-index: 3000;
        bottom: 0;
        background: ${props => props.theme.mediumBrown};
        div {
          display: inline-block;
          width: 100%;
        }
        a {
          color: #ffffff;
          display: inline-block;
          width: 100%;
          padding: 1em;
        }
      }
    }
  }
`

const Footer = props => (
  <StyleHeader>
    <div className="bar">
      <FooterFirst ruta={props.ruta} />
      {props.ruta.includes('/gracias') || props.ruta.includes('newsletter') ? (
        ''
      ) : (
        <FooterFourth ruta={props.ruta} />
      )}
      <FooterSecond ruta={props.ruta} />
      {props.ruta.includes('/mai') ||
      props.ruta.includes('/menu-mai') ||
      props.ruta.includes('/reserv') ? (
        ''
      ) : (
        <FooterThird ruta={props.ruta} />
      )}
    </div>
  </StyleHeader>
)

export default Footer
