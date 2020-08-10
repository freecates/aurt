import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import styled from 'styled-components';

const Pdf = styled.div`
  canvas {
    margin: 0 auto;
    max-width: 100%;
    height:auto!important;
  }
`;

const NavPdf = styled.nav`
  li {
    list-style: none;
  }
  li:first-child {
    float: left;
  }
  li:last-child {
    float: right;
  }
  button {
    background: none;
    border: none;
  }
  button:focus {
    outline: none;
  }
  button:hover {
    cursor: pointer;
  }
  button[disabled] {
    display: none;
  }
  ul {
    text-align: center;
    margin: 0;
    padding: 0;
    font-weight: bold;
  }
  ul:after {
    content: '';
    display: block;
    clear: both;
  }
`;

const Loading = ({ lang }) => {
  return (
    <p style={{ textAlign: 'center' }}>
      {lang.includes('/ca') && <span>... Carregant</span>}
      {lang.includes('/en') && <span>... Loading</span>}
      {lang.indexOf('/ca') == -1 && lang.indexOf('/en') == -1 && (
        <span>... Cargando</span>
      )}
    </p>
  );
};

const MyPdfViewer = (props) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  return (
    <Pdf>
      <Document
        file={props.file}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<Loading lang={props.ruta} />} renderMode={'canvas'}>
        <Page pageNumber={pageNumber} />
      </Document>
      <NavPdf>
        <ul className='pager'>
          <li className='previous'>
            <button
              type='button'
              disabled={pageNumber <= 1}
              onClick={previousPage}>
              {'<<'}
            </button>
          </li>
          <li className='next'>
            <button
              type='button'
              disabled={pageNumber >= numPages}
              onClick={nextPage}>
              {'>>'}
            </button>
          </li>
        </ul>
      </NavPdf>
    </Pdf>
  );
};

export default MyPdfViewer;
