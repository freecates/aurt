import styled from 'styled-components'

const SubTitle = styled.h3`
  margin: 1rem auto 1rem;
  text-align: center;
  line-height: 2.9rem;
  font-size: 2.2rem;
  letter-spacing: 0.1em;
  color: ${props => props.theme.black};
  max-width: 40rem;
  @media (max-width: 767px) {
    max-width: 85%;
  }
  span {
    text-transform: uppercase;
    font-family: 'neutraface_text';
    letter-spacing: 0.3em;
  }
  a {
    background: white;
    display: inline;
    padding: 0 1rem;
    text-decoration: underline;
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
`

export default SubTitle
