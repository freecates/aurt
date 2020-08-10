import styled from 'styled-components'
import InnerLayout from './InnerLayout'
import TextSeparator from './styles/TextSeparator'
import MyPdfViewer from './MyPdfViewer'
import Link from 'next/link'

const MenuPdfStyle = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  canvas {
    width: 100%;
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

const MenuPdf = props => (
  <InnerLayout mainlayout ruta={props.ruta}>
    <MenuPdfStyle ruta={props.ruta}>
      <TextSeparator>
        <div className="here" />
      </TextSeparator>
      {props.ruta.includes('/ca') && (
        <MyPdfViewer file={props.file} ruta={props.ruta} />
        /* <Iframe
          url="https://wp.aurtrestaurant.com/207-2/"
          width="100%"
          height="60vh"
          id="aurt-contact"
          className="aurt-contact"
          display="initial"
          position="relative"
          allowFullScreen
        /> */
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
            <Link href={'/menu'} >
              <a title={'Volver a Menu'}>{'<<'}</a>
            </Link>
          ))}
      </h2>

      <h2 className="text-center">
        {props.ruta.includes('/ca') && (
          <Link href={'/ca/menu'} >
            <a title={'Tornar a Menu'}>{'<<'}</a>
          </Link>
        )}
      </h2>

      <h2 className="text-center">
        {props.ruta.includes('/en') && (
          <Link href={'/en/menu'} >
            <a title={'Back to Menu'}>{'<<'}</a>
          </Link>
        )}
      </h2>
    </MenuPdfStyle>
  </InnerLayout>
)

export default MenuPdf
