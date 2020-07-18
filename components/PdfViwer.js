import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'

export default class PdfViwer extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  }

  onDocumentLoadSuccess = document => {
    const { numPages } = document
    this.setState({
      numPages,
      pageNumber: 1
    })
  }

  changePage = offset =>
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + offset
    }))

  previousPage = () => this.changePage(-1)

  nextPage = () => this.changePage(1)

  render() {
    const { numPages, pageNumber } = this.state

    return (
      <>
        <Document
          file={
            'https://wp.aurtrestaurant.com/wp-content/uploads/2019/03/carta-menu-mai.pdf'
          }
          onLoadSuccess={this.onDocumentLoadSuccess}
          renderMode={'svg'}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <div>
          <p>
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </p>
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={this.previousPage}
          >
            Previous
          </button>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={this.nextPage}
          >
            Next
          </button>
        </div>
      </>
    )
  }
}
