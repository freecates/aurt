import React from 'react';
import styled from 'styled-components';

const setHref = (pathname) => {
  if (pathname === '/') {
    return 'https://www.covermanager.com/reserve/module_restaurant/restaurante-aurtx/spanish?start=2025-02-24&end=2025-02-25';
  } else if (pathname === '/en') {
    return 'https://www.covermanager.com/reserve/module_restaurant/restaurante-aurtx/english?start=2025-02-24&end=2025-02-25';
  } else if (pathname === '/ca') {
    return 'https://www.covermanager.com/reserve/module_restaurant/restaurante-aurtx/catalan?start=2025-02-24&end=2025-02-25';
  }
};

const setSrc = (pathname) => {
  if (pathname === '/') {
    return '/static/banner-huniik-es.gif';
  } else if (pathname === '/en') {
    return '/static/banner-huniik-en.gif';
  } else if (pathname === '/ca') {
    return '/static/banner-huniik-ca.gif';
  }
};

const StyleBanner = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  position: absolute;
  top: 19rem;
  left: 0;
  width: 100%;
  span {
    display: block;
    cursor: pointer;
    position: relative;
    z-index: 2001;
    width: 25px;
    height: 25px;
    left: calc(50% + 150px);
    top: 40px;
    @media (min-width: 1024px) {
      width: 25px;
      height: 25px;
      left: calc(50% + 275px);
      top: 50px;
    }
  }
  a {
    display: inline;
    position: relative;
    z-index: 2000;
  }
  img {
    position: relative;
    left: calc(50% - 187.5px);
    max-width: 375px;
    width: 100%;
    height: auto;
  }
  @media (min-width: 1024px) {
    img {
      left: calc(50% - 225px);
      max-width: 550px;
      width: 100%;
    }
  }
`;

const BannerHome = ({ pathname }) => {
  const [isVisble, setIsVisible] = React.useState(true);
  return (
    <StyleBanner visible={isVisble}>
      <span onClick={() => setIsVisible(false)} />
      <a href={setHref(pathname)}>
        <img
          loading='lazy'
          src={setSrc(pathname)}
          alt='Og Image AURT Web'
          width='550'
          height='537'
        />
      </a>
    </StyleBanner>
  );
};

export default BannerHome;
