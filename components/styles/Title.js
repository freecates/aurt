import styled from 'styled-components'

const Title = styled.h1`
  margin: 3rem 1rem 1rem;
  text-align: center;
  line-height: 8.2rem;
  font-size: 8.5rem;
  text-transform: uppercase;
  color: ${props => props.theme.black};
  @media (max-width: 768px) {
    font-size: 4.5rem;
    line-height: 6.1rem;
  }
  @media (max-width: 480px) {
    font-size: 3.8rem;
    line-height: 5.2rem;
  }
  a {
    background: white;
    display: inline;
    padding: 0 1rem;
  }
  span {
    font-weight: normal;
    font-family: 'neutraface_text',sans-serif;
  }
`

export default Title
