import styled from 'styled-components'

const TextSeparator = styled.div`
  div {
    margin: 10px auto;
    width: 60%;
    height: 100px;
    position: relative;
    text-align: center;
  }
  div.medium {
    height: 50px;
  }
  div.here:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    border-left: 1px solid ${props => props.theme.black};
    transform: translate(-50%);
    z-index: 1;
  }
`

export default TextSeparator
