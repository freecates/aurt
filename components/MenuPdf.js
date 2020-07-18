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
        <MyPdfViewer file="https://wp.aurtrestaurant.com/wp-content/uploads/menus-aurt/menu-aurt-ca.pdf" />
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
        <MyPdfViewer file="https://wp.aurtrestaurant.com/wp-content/uploads/menus-aurt/menu-aurt-en.pdf" />
      )}
      {props.ruta.indexOf('/ca') == -1 &&
        (props.ruta.indexOf('/en') == -1 && (
          <MyPdfViewer file="https://wp.aurtrestaurant.com/wp-content/uploads/menus-aurt/menu-aurt-es.pdf" />
        ))}
      <h2 className="text-center">
        {props.ruta.indexOf('/ca') == -1 &&
          (props.ruta.indexOf('/en') == -1 && (
            <Link href={'/menu'} prefetch>
              <a title={'Volver a Menu'}>{'<<'}</a>
            </Link>
          ))}
      </h2>

      <h2 className="text-center">
        {props.ruta.includes('/ca') && (
          <Link href={'/ca/menu'} prefetch>
            <a title={'Tornar a Menu'}>{'<<'}</a>
          </Link>
        )}
      </h2>

      <h2 className="text-center">
        {props.ruta.includes('/en') && (
          <Link href={'/en/menu'} prefetch>
            <a title={'Back to Menu'}>{'<<'}</a>
          </Link>
        )}
      </h2>
    </MenuPdfStyle>
  </InnerLayout>
)

export default MenuPdf
