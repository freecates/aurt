import React from 'react';
import styled from 'styled-components';
import InnerLayout from './InnerLayout';
import Item from './Item';
import Title from './styles/Title';
import SubTitle from './styles/SubTitle';
import TextSeparator from './styles/TextSeparator';
import Head from 'next/head';

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 60px;
  max-width: ${(props) => props.theme.maxWidth};
`;

const Items = ({ ruta, data }) => {
  return (
    <InnerLayout mainlayout>
      <Head>
        <title>AÜRT Restaurant | Blog</title>
        {ruta.includes('/ca') && (
          <meta
            name='description'
            content={'Notícies, opinions i curiositats'}
          />
        )}
        {ruta.includes('/en') && (
          <meta name='description' content={'News, opinions and curiosities'} />
        )}
        {ruta.indexOf('/ca') == -1 && ruta.indexOf('/en') == -1 && (
          <meta
            name='description'
            content={'Noticias, opiniones y curiosidades'}
          />
        )}
      </Head>
      <Center>
        <Title>Blog</Title>
        {ruta.includes('/ca') && (
          <SubTitle>Notícies, opinions i curiositats</SubTitle>
        )}
        {ruta.includes('/en') && (
          <SubTitle>News, opinions and curiosities</SubTitle>
        )}
        {ruta.indexOf('/ca') == -1 && ruta.indexOf('/en') == -1 && (
          <SubTitle>Noticias, opiniones y curiosidades</SubTitle>
        )}
        <TextSeparator>
          <div className='here' />
        </TextSeparator>
        <ItemsList>
          {data.map((d) => (
            <Item item={d} key={d.id} ruta={ruta} />
          ))}
        </ItemsList>
      </Center>
    </InnerLayout>
  );
};

export default Items;
