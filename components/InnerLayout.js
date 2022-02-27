import React, { useEffect } from 'react'
import styled from 'styled-components'
import { initGA, logPageView } from '../utils/analytics'

const layoutStyle = {
  maxWidth: '100%',
  background: '#CEC7C1',
  margin: '0 auto'
}

const MainStyle = styled.main`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  @media (max-width: 768px) {
    padding-top: 6rem;
  }
`

const MainStyleReserva = styled.main`
  max-width: 100rem;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding-top: 6rem !important;
  }
`

const MainVideoStyle = styled.main`
  max-width: 100%;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding-top: 6rem;
  }
`

export default function InnerLayout(props) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  })

  return (
    <React.Fragment>
      {props.layout && (
        <div style={layoutStyle} className={'layout' in props && 'layout'}>
          <MainStyleReserva style={{ padding: '2rem 0' }}>
            {props.children}
          </MainStyleReserva>
        </div>
      )}
      {props.mainlayout && (
        <div className={'mainlayout' in props && 'mainlayout'}>
          <MainStyle>{props.children}</MainStyle>
        </div>
      )}
      {props.videolayout && (
        <div className={'videolayout' in props && 'videolayout'}>
          <MainVideoStyle>{props.children}</MainVideoStyle>
        </div>
      )}
    </React.Fragment>
  )
}
