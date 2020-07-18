import styled from 'styled-components'

const Blockquote = styled.blockquote`
  margin: 0 auto;
  text-align: center;
  max-width: 44rem;
  @media (max-width: 767px) {
    max-width: 85%;
  }
  color: ${props => props.theme.black};
  h2 {
    line-height: 3.9rem;
    font-size: 3rem;
    letter-spacing: 0.1em;
  }
`

export default Blockquote
