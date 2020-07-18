import Iframe from 'react-iframe'
import styled from 'styled-components'
import InnerLayout from './InnerLayout'
import TextSeparator from './styles/TextSeparator'
import Title from './styles/Title'

const ContactStyle = styled.div`
  max-width: 50rem;
  margin: 0 auto;
`

const Contact = () => (
  <InnerLayout mainlayout>
    <ContactStyle>
      <Title>Trabaja con nosotros</Title>
      <TextSeparator>
        <div className="here" />
      </TextSeparator>
      <Iframe
        url="https://wp.aurtrestaurant.com/14-2/"
        width="104%"
        height="110vh"
        id="aurt-contact"
        className="aurt-contact"
        display="initial"
        position="relative"
        allowFullScreen
      />
    </ContactStyle>
  </InnerLayout>
)

export default Contact
