import Link from 'next/link'
import styled from 'styled-components'
import InnerLayout from './InnerLayout'
import MyPdfViewer from './MyPdfViewer'
import TextSeparator from './styles/TextSeparator'

const MAIPdfStyle = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  canvas {
    max-width: 100%;
  }
  @media (min-width: 768px) {
    iframe {
      height: 50vh !important;
    }
  }
  .text-center {
    text-align: center;
  }
`

const MAIPdf = props => (
  <InnerLayout mainlayout ruta={props.ruta}>
    <MAIPdfStyle ruta={props.ruta}>
      <TextSeparator>
        <div className="here" />
      </TextSeparator>
      {props.ruta.includes('/ca') && (
        <MyPdfViewer
          file={props.file} ruta={props.ruta}
        />
      )}
      {props.ruta.includes('/en') && (
        <MyPdfViewer file={props.file} ruta={props.ruta} />
      )}
      {props.ruta.indexOf('/ca') == -1 &&
        (props.ruta.indexOf('/en') == -1 && (
          <MyPdfViewer file={props.file} ruta={props.ruta} />
        ))}
      <h2 className="text-center">
        {props.ruta.indexOf('/ca') == -1 &&
          (props.ruta.indexOf('/en') == -1 && (
            <Link href={'/mai'} >
              <a title={"Volver a MA'I"}>{'<<'}</a>
            </Link>
          ))}
      </h2>

      <h2 className="text-center">
        {props.ruta.includes('/ca/') && (
          <Link href={'/ca/mai'} >
            <a title={"Tornar a MA'I"}>{'<<'}</a>
          </Link>
        )}
      </h2>

      <h2 className="text-center">
        {props.ruta.includes('/en') && (
          <Link href={'/en/mai'} >
            <a title={"Back to MA'I"}>{'<<'}</a>
          </Link>
        )}
      </h2>
    </MAIPdfStyle>
  </InnerLayout>
)

export default MAIPdf
