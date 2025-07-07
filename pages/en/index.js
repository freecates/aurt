import Head from 'next/head';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import CapsulesVideoHome from '../../components/CapsulesVideoHome';
import Loader from '../../components/Loader';
import BannerHome from '@components/BannerHome';

function Home(props) {
  const { pathname } = props;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      props.pageTransitionReadyToEnter();
      setLoaded({ loaded: true });
    }, 1950);
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  });

  if (!loaded) return <Loader />;
  return (
    <div>
      <Head>
        <title>AÜRT | Informal haute cuisine exposed, by Artur Martínez</title>
        <meta
          name='description'
          content='An unusual space of informal haute cuisine, in the lobby of the Hotel Hilton Diagonal Mar Barcelona, where professionals and diners coexist and interact and where the chef Artur Martínez offers his particular gastronomic vision for only 15 guests.'
        />
        <meta
          name='keywords'
          content='Aürt, Aürtrestaurant, restaurant, Barcelona, Catalonia, Spain, Hilton, Hilton Diagonal Mar, Diagonal Mar, hotel, gastronomy, haute cuisine, Artur, Artur Martínez, Capritx, Michelin star, Michelin Guide, Michelin, Lobby, Lobbyfood, Lobbyou, high kitchen, cook, chef, sommelier, cooking school, Taberna del Ciri, Marc Cano, Pol Ruiz, Edu Tortajada, Ariadna Plantada, David Otero, Alba Llacena, MA’I, menu, tasting, booking, OpenTable, table, creative cuisine, ATcomunicacio, terrassa, slow food, proximity, sustainable, exotic,simplicity, thoughtful'
        />
        <meta
          property='og:url'
          content={`https://www.aurtrestaurant.com/en/`}
        />
        <meta property='og:type' content='article' />
        <meta
          property='og:title'
          content={'AÜRT | Informal haute cuisine exposed, by Artur Martínez.'}
        />
        <meta
          property='og:description'
          content={
            'An unusual space of informal haute cuisine, in the lobby of the Hotel Hilton Diagonal Mar Barcelona, where professionals and diners coexist and interact and where the chef Artur Martínez offers his particular gastronomic vision for only 15 guests.'
          }
        />
        <meta
          property='og:image'
          content={
            'https://www.aurtrestaurant.com/static/icons/og-image-aurt-web.png'
          }
        />
        <meta property='og:image:width' content='1024' />
        <meta property='og:image:height' content='1024' />
      </Head>
      <BannerHome pathname={pathname} active={true} />
      <CapsulesVideoHome />
    </div>
  );
}

Home.propTypes = {
  pageTransitionReadyToEnter: PropTypes.func,
};

Home.defaultProps = {
  pageTransitionReadyToEnter: () => {},
};

export default Home;
