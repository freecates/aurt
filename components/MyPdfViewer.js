import Pdf from 'react-pdf-js'
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
  li.disabled {
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

class MyPdfViewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: ''
    }
  }

  onDocumentComplete = pages => {
    this.setState({ page: 1, pages })
  }

  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 })
  }

  handleNext = () => {
    this.setState({ page: this.state.page + 1 })
  }

  renderPagination = (page, pages) => {
    let previousButton = (
      <li className="previous" onClick={this.handlePrevious}>
        <a href="#">
          <i className="fa fa-arrow-left" /> {'<<'}
        </a>
      </li>
    )
    if (page === 1) {
      previousButton = (
        <li className="previous disabled">
          <a href="#">{'<<'}</a>
        </li>
      )
    }
    let nextButton = (
      <li className="next" onClick={this.handleNext}>
        <a href="#">{'>>'}</a>
      </li>
    )
    if (page === pages) {
      nextButton = (
        <li className="next disabled">
          <a href="#">{'>>'}</a>
        </li>
      )
    }
    return (
      <NavPdf>
        <ul className="pager">
          {previousButton}
          {nextButton}
        </ul>
      </NavPdf>
    )
  }

  render() {
    let pagination = null
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages)
    }
    return (
      <div>
        <Pdf
          file={this.props.file}
          onDocumentComplete={this.onDocumentComplete}
          page={this.state.page}
          renderMode={'svg'}
        />
        {pagination}
      </div>
    )
  }
}

export default MyPdfViewer
