import styled from 'styled-components'
import InnerLayout from './InnerLayout'
import Title from './styles/Title'
import TextSeparator from './styles/TextSeparator'
import TextBlock from './styles/TextBlock'

const ThanksStyle = styled.div`
  max-width: 50rem;
  margin: 0 auto;
`

const Thanks = props => (
  <InnerLayout mainlayout>
    <ThanksStyle>
      <TextSeparator>
        <div className="here" />
      </TextSeparator>
      <Title>
        ¡Gracias!
        <br />
        Thanks!
        <br />
        Gràcies!
      </Title>

      <TextBlock>
        <p>
          [ES] Gracias por suscribirte a la newsletter. En breve nos pondremos
          en contacto.
        </p>
        <p>
          [EN] Thanks for subscribing to the newsletter. We will contact you
          shortly.
        </p>
        <p>
          [CA] Gràcies per subscriure't a la newsletter. En breu ens posarem en
          contacte.
        </p>
      </TextBlock>
    </ThanksStyle>
  </InnerLayout>
)

export default Thanks
