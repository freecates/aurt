import styled from 'styled-components'

const FooterStyles = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: start;
  letter-spacing: 0.1em;
  p,
  section {
    font-size: 1.4rem;
    line-height: 1.8rem;
  }

  section > div,
  section > div > p {
    letter-spacing: 0;
  }
  a,
  .light-brown {
    color: ${props => props.theme.mediumBrown};
  }
  .sn {
    width: 32px;
    height: 32px;
  }
`

export default FooterStyles
