import Head from 'next/head';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import CapsulesVideoHome from '../components/CapsulesVideoHome';
import Loader from '../components/Loader';

function Home(props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      props.pageTransitionReadyToEnter();
      setLoaded({ loaded: true });
    }, 6950);
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  });

  if (!loaded) return <Loader />;
  return (
    <div>
      <Head>
        <title>
          AÜRT | Restaurante de alta cocina informal al descubierto, by Artur
          Martínez
        </title>
        <meta
          name='description'
          content='Un espacio inusual de alta cocina informal, en el lobby del Hotel Hilton Diagonal Mar Barcelona, donde profesional y comensal conviven e interactúan y donde el cocinero Artur Martínez ofrece su particular visión gastronómica para solo 15 comensales.'
        />
        <meta
          name='keywords'
          content='Aürt, Aürtrestaurant, restaurante, Barcelona, Cataluña, España, Hilton, Hilton Diagonal Mar, Diagonal Mar, hotel, gastronomía, alta gastronomía, Artur, Artur Martínez, Capritx, estrella Michelin, Guia Michelin, Michelin, Lobby, Lobbyfood, Lobbyou, alta cocina, cocina, cocinero, Cheff, sommelier, escuela de cocina, Taberna del Ciri, Marc Cano, Pol Ruiz, Edu Tortajada, Ariadna Plantada, David Otero, Alba Llacena, MA’I, menú, degustación, prueba, reservar, OpenTable, mesa, cocina creativa, ATcomunicacio, terrassa, slow food, proximidad, sostenible, exotismo, sencillez, reflexionada'
        />
        <meta property='og:url' content={`https://www.aurtrestaurant.com/`} />
        <meta property='og:type' content='article' />
        <meta
          property='og:title'
          content={
            'AÜRT | Restaurante de alta cocina informal al descubierto, by Artur Martínez'
          }
        />
        <meta
          property='og:description'
          content={
            'Un espacio inusual de alta cocina informal, en el lobby del Hotel Hilton Diagonal Mar Barcelona, donde profesional y comensal conviven e interactúan y donde el cocinero Artur Martínez ofrece su particular visión gastronómica para solo 15 comensales.'
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
