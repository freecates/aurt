import React, { useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';
import styled from 'styled-components'

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
    background:none;
    border:none;
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
`

const MyPdfViewer = (props) => {
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);

  const { pdfDocument, pdfPage } = usePdf({
    file: props.file,
    page,
    canvasRef,
  });

  return (
    <div>
      {!pdfDocument && <span>Loading...</span>}
      <canvas ref={canvasRef} style={{margin: '0 auto', display: 'block'}}/>
      {Boolean(pdfDocument && pdfDocument.numPages) && (
        <NavPdf>
          <ul className="pager">
            <li className="previous">
              <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                {'<<'}
              </button>
            </li>
            <li className="next">
              <button
                disabled={page === pdfDocument.numPages}
                onClick={() => setPage(page + 1)}
              >
                {'>>'}
              </button>
            </li>
          </ul>
        </NavPdf>
      )}
    </div>
  );
};

export default MyPdfViewer;
