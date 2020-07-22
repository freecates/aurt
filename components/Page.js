import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'
import fetch from 'isomorphic-unfetch'

const theme = {
  black: '#000000',
  brown: '#3A3A3A',
  mediumBrown: '#AAA5A2',
  lightBrown: '#CEC7C1',
  white: '#FFFFFF',
  offWhite: '#EDEDED',
  purple: '#e5007d',
  maxWidth: '80rem',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
}

const StyledPage = styled.div`
  background: white;
  max-width: 1440px;
  margin: 0 auto;
  color: ${props => props.theme.black};
`

const Inner = styled.div`
  margin: 0 auto;
  padding: 2rem 0 8rem;
`

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'neutraface_2_text_bold';
    src: url('/static/Neutra2Text_bold.woff2') format('woff2'),     url('/static/Neutra2Text_bold.woff') format('woff');
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    font-display: fallback;
}
@font-face {
    font-family: 'neutraface_text';
    src: url('/static/Neutra2Text_book.woff2') format('woff2'),     url('/static/Neutra2Text_book.woff') format('woff');
    font-style: normal;
    font-weight: 400;
    font-stretch: normal;
    font-display: fallback;
}
html {
  box-sizing:border-box;
  font-size:10px;
  line-height:10px;
}
*, *:before, *:after {
  box-sizing:inherit;
}
body {
  padding:0;
  font-size: 1.9rem;
  margin: 0;
  line-height:2.5rem;
  letter-spacing:.25rem;
  font-family: 'neutraface_text', sans-serif;
  font-weight: normal;
  font-kerning: normal;
  text-rendering:optimizeLegibility;
  font-variant-ligatures: common-ligatures;
  font-variant-numeric: lining-nums;
  -moz-font-feature-settings: 'kern', 'liga', 'lnum';
  -ms-font-feature-settings: 'kern', 'liga', 'lnum' ;
  -webkit-font-feature-settings: 'kern', 'liga', 'lnum' ;
  font-feature-settings: 'kern', 'liga', 'lnum' ;
}
@media (min-width: 1024px) {
  body {
    margin:2em 0 0;
    }  
}
a {
  text-decoration: none;
  color: ${theme.black};
}
h1, h2, h3, h4, strong {
  font-family: 'neutraface_2_text_bold';
}`

export default function Page(props) {
  const [content, setContent] = useState([])
  const [lang, setLang] = useState('es')
  const [langMenu, setLangMenu] = useState({})

  function idForPathInMenu(fileName, content) {
    return content.reduce((foundID, element) => {
      if (element.items) {
        const id = idForPathInMenu(fileName, element.items)
        if (id >= 0) {
          return id
        }
      }
      return element.path === fileName ? element.id : foundID
    }, -1)
  }
  function pathForIdInMenuRecursive(id, content) {
    return content.reduce((foundPath, element) => {
      if (element.items) {
        const path = pathForIdInMenuRecursive(id, element.items)
        if (path !== null) {
          return path
        }
      }
      return element.id === id ? element.path : foundPath
    }, null)
  }

  function pathForIdInMenu(id, content, defaultpath = '/') {
    const path = pathForIdInMenuRecursive(id, content)
    return path === null ? defaultpath : path
  }

  async function createLangMenu(currentLang, fileName) {
    const resEN = await fetch(
      `https://aurtdata.now.sh/static/locales/en/navitems.json`
    )
    const resCA = await fetch(
      `https://aurtdata.now.sh/static/locales/ca/navitems.json`
    )
    const resES = await fetch(
      `https://aurtdata.now.sh/static/locales/es/navitems.json`
    )

    const contentCA = await resCA.json()
    const contentEN = await resEN.json()
    const contentES = await resES.json()

    if (currentLang == 'es') {
      return {
        es: {
          selected: true,
          path: fileName
        },
        en: {
          selected: false,
          path: pathForIdInMenu(
            idForPathInMenu(fileName, contentES),
            contentEN,
            '/en'
          )
        },
        ca: {
          selected: false,
          path: pathForIdInMenu(
            idForPathInMenu(fileName, contentES),
            contentCA,
            '/ca'
          )
        }
      }
    }

    if (currentLang == 'en') {
      return {
        es: {
          selected: false,
          path: pathForIdInMenu(idForPathInMenu(fileName, contentEN), contentES)
        },
        en: {
          selected: true,
          path: fileName
        },
        ca: {
          selected: false,
          path: pathForIdInMenu(
            idForPathInMenu(fileName, contentEN),
            contentCA,
            '/ca'
          )
        }
      }
    }

    if (currentLang == 'ca') {
      return {
        es: {
          selected: false,
          path: pathForIdInMenu(idForPathInMenu(fileName, contentCA), contentES)
        },
        en: {
          selected: false,
          path: pathForIdInMenu(
            idForPathInMenu(fileName, contentCA),
            contentEN,
            '/en'
          )
        },
        ca: {
          selected: true,
          path: fileName
        }
      }
    }
  }

  useEffect(() => {
    async function updateContentFromFileName(fileName) {
      let newLang = 'es'
      if (fileName.includes('/en')) {
        newLang = 'en'
      } else if (fileName.includes('/ca')) {
        newLang = 'ca'
      }

      if (lang !== newLang || content.length == 0) {
        const res = await fetch(
          `https://aurtdata.now.sh/static/locales/${newLang}/navitems.json`
        )
        const content = await res.json()
        const langMenu = await createLangMenu(newLang, fileName)
        setContent(content)
        setLang({ lang: newLang })
        setLangMenu(langMenu)
        // console.log({ langMenu })
      } else {
        const langMenu = await createLangMenu(newLang, fileName)
        setLangMenu(langMenu)
      }
    }
    updateContentFromFileName(props.ruta)
  }, [props.ruta])

  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Meta />
        <Header content={content} ruta={props.ruta} langMenu={langMenu} />
        <Inner>{props.children}</Inner>
        <Footer ruta={props.ruta} />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
      </StyledPage>
      <GlobalStyle/>
    </ThemeProvider>
  )
}
