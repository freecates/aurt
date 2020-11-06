import styled from 'styled-components'

const TextBlock = styled.div`
  margin: 0 auto 1em auto;
  max-width: 65rem;
  color: ${props => props.theme.black};
  text-align: left;
  @media (max-width: 767px) {
    max-width: 85%;
  }
  .center {
    text-align: center !important;
  }
  .uppercase {
    text-transform: uppercase;
  }
  .purple {
    color: ${props => props.theme.purple};
  }
  .with-margin {
    margin-top: 2em;
  }
  small {
    font-size: 1.3rem;
  }
  img {
    margin: 0;
    max-width: 100%;
    height: auto !important;
    vertical-align: middle;
  }
  img.with-margin {
    margin: 2rem 0 0;
  }
  img.with-border-radius {
    border-radius: 50%;
  }
  div {
    margin: 0 auto;
  }
`

export default TextBlock
