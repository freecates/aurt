import { useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';
import Logo from './Logo';
import React from 'react';

const LogoSection = styled.h1`
  grid-column: 3;
  grid-row: 1;
  font-size: 4rem;
  margin: 0 auto;
  z-index: 2998;
  img {
    vertical-align: middle;
    width: 130px;
  }
  @media (max-width: 960px) {
    grid-column: 2/4;
    grid-row: 1;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyleHeader = styled.header`
  .bar {
    display: grid;
    grid-template-columns: minmax(auto, 5vw) 1fr auto 1fr minmax(auto, 5vw);
    grid-template-rows: auto 10px;
    justify-content: space-between;
    align-items: center;
    .left {
      grid-column: 2;
      justify-self: start;
    }
    .right {
      grid-column: 4;
      justify-self: end;
    }
    .starred {
      display: none;
    }

    .lang-menu {
      display: block;
      justify-self: end;
      text-align: center;
      z-index: 2999;
      ul {
        margin: 0;
        list-style: none;
        padding: 0;
        li {
          display: inline-block;
          position: relative;
          text-align: center;
          ul.dropdown {
            min-width: 100%;
            display: none;
            position: absolute;
            z-index: 999;
            left: 0;
            li {
              display: block;
            }
          }
          a {
            display: block;
            padding: 0;
            color: #333;
            text-decoration: none;
          }
        }
        li:hover {
          cursor: pointer;
          ul.dropdown {
            display: block;
          }
        }
      }
    }

    @media (max-width: 960px) {
      position: fixed;
      z-index: 3000;
      width: 100%;
      background: #ffffff;
      grid-template-columns: minmax(auto, 5vw) 1fr auto minmax(auto, 5vw);
      justify-content: center;
      .left,
      .right,
      .lang-menu {
        grid-column: 2;
        padding: 1em 0;
      }
      .left {
        grid-row: 2;
        grid-column: 2/4;
      }
      .burger-on-bar {
        grid-column: 2;
        grid-row: 1;
      }
      .right {
        grid-row: 3;
        grid-column: 2/4;
      }
      .lang-menu {
        grid-row: 1;
        grid-column: 3;
      }
    }

    @media (min-width: 1024px) {
      .lang-menu {
        display: block;
        grid-column: 5;
        grid-row: 1;
        justify-self: start;
      }
    }
    @media (min-width: 1024px) {
      .starred {
        z-index: 3000;
        display: block;
        grid-column: 2;
        grid-row: 2;
        justify-self: start;
        padding-left: 2rem;
        padding-top: 2rem;
        backface-visibility: hidden;
        align-self: stretch;
      }
    }
    @media (min-width: 768px) {
      .lang-menu {
        display: block;
        text-align: center;
      }
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${(props) => props.theme.lightGrey};
  }
`;

const Header = (props) => {
  const router = useRouter();
  
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      NProgress.start();
    });
    router.events.on('routeChangeComplete', () => {
      NProgress.done();
    });
    router.events.on('routeChangeError', () => {
      NProgress.done();
    });
  }, [])

  return (
    <StyleHeader>
      <div className='bar'>
        <Nav
          content={props.content}
          langMenu={props.langMenu}
          ruta={props.ruta}
        />
        <LogoSection>
          {props.ruta.includes('/en') && (
            <Link href='/en'>
              <a>
                <Logo />
              </a>
            </Link>
          )}
          {props.ruta.includes('/ca') && (
            <Link href='/ca'>
              <a>
                <Logo />
              </a>
            </Link>
          )}
          {props.ruta.indexOf('/ca') == -1 && props.ruta.indexOf('/en') == -1 && (
            <Link href='/'>
              <a>
                <Logo />
              </a>
            </Link>
          )}
        </LogoSection>
      </div>
    </StyleHeader>
  );
};

export default Header;
