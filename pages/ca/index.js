import Head from 'next/head';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import CapsulesVideoHome from '../../components/CapsulesVideoHome';
import Loader from '../../components/Loader';

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
          AÜRT | Restaurant d’alta cuina informal al descobert, by Artur
          Martínez.
        </title>
        <meta
          name='description'
          content='Un espai inusual d’alta cuina informal, en el lobby de l’Hotel Hilton Diagonal Mar Barcelona, on professional i comensal conviuen i interactuen i on el cuiner Artur Martínez ofereix la seva particular visió gastronòmica per a només 15 comensals.'
        />
        <meta
          name='keywords'
          content='Aürt, Aürtrestaurant, restaurant, Barcelona, Catalunya, Espanya, Hilton, Hilton Diagonal Mar, Diagonal Mar, hotel, gastronomia, alta gastronomia, Artur, Artur Martínez, Capritx, estrella Michelin, Guia Michelin, Michelin, Lobby, Lobbyfood, Lobbyou, alta cuina, cuina, cuiner, Xef, sommelier, escola de cuina, Taberna del Ciri, Marc Cano, Pol Ruiz, Edu Tortajada, Ariadna Plantada, David Otero, Alba Llacena, MA’I, menú, degustació, tast, reservar, OpenTable, taula, cuina creativa, ATcomunicacio, terrassa, slow food, proximitat, sostenible, exotisme, senzillesa, reflexionada'
        />
        <meta
          property='og:url'
          content={`https://www.aurtrestaurant.com/ca/`}
        />
        <meta property='og:type' content='article' />
        <meta
          property='og:title'
          content={
            'AÜRT | Restaurant d’alta cuina informal al descobert, by Artur Martínez.'
          }
        />
        <meta
          property='og:description'
          content={
            'Un espai inusual d’alta cuina informal, en el lobby de l’Hotel Hilton Diagonal Mar Barcelona, on professional i comensal conviuen i interactuen i on el cuiner Artur Martínez ofereix la seva particular visió gastronòmica per a només 15 comensals.'
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
