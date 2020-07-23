import Link from 'next/link';
import styled from 'styled-components';
import InnerLayout from './InnerLayout';
import MyPdfViewer from './MyPdfViewer';
import TextSeparator from './styles/TextSeparator';

const BodegaPdfStyle = styled.div`
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
`;

const BodegaPdf = (props) => {
  return (
    <InnerLayout mainlayout ruta={props.ruta}>
      <BodegaPdfStyle ruta={props.ruta}>
        <TextSeparator>
          <div className='here' />
        </TextSeparator>
        {props.ruta.includes('/ca') && (
          <MyPdfViewer file={props.file} />
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
          <MyPdfViewer file={props.file} />
        )}
        {props.ruta.indexOf('/ca') == -1 && props.ruta.indexOf('/en') == -1 && (
          <MyPdfViewer file={props.file} />
        )}
        <h2 className='text-center'>
          {props.ruta.indexOf('/ca') == -1 && props.ruta.indexOf('/en') == -1 && (
            <Link href={'/bodega'} >
              <a title={'Volver a Bodega'}>{'<<'}</a>
            </Link>
          )}
        </h2>

        <h2 className='text-center'>
          {props.ruta.includes('/ca') && (
            <Link href={'/ca/celler'} >
              <a title={'Tornar a Celler'}>{'<<'}</a>
            </Link>
          )}
        </h2>

        <h2 className='text-center'>
          {props.ruta.includes('/en') && (
            <Link href={'/en/cellar'} >
              <a title={'Back to Cellar'}>{'<<'}</a>
            </Link>
          )}
        </h2>
      </BodegaPdfStyle>
    </InnerLayout>
  );
};

export default BodegaPdf;
