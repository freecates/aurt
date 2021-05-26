import React from 'react'
import { Query } from '@apollo/client/react/components'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import styled from 'styled-components'
import InnerLayout from './InnerLayout'
import Item from './Item'
import Title from './styles/Title'
import SubTitle from './styles/SubTitle'
import TextSeparator from './styles/TextSeparator'
import Head from 'next/head'

const propTypes = {
  ruta: PropTypes.string.isRequired
}

const defaultProps = {}

export const ALL_POSTS_QUERY = gql`
  query ALL_POSTS_QUERY {
    posts {
      edges {
        node {
          date
          id
          title
          slug
          featuredImage {
            node {
              id
              sourceUrl
              mediaDetails {
                width
                sizes {
                  height
                  sourceUrl
                  width
                }
              }
            }
          }
          content
        }
      }
    }
  }
`

const Center = styled.div`
  text-align: center;
`

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
`

export default class Items extends React.Component {
  render() {
    const ruta = this.props.ruta
    return (
      <InnerLayout mainlayout>
        <Head>
          <title>AÜRT Restaurant | Blog</title>
          {ruta.includes('/ca') && (
            <meta
              name="description"
              content={'Notícies, opinions i curiositats'}
            />
          )}
          {ruta.includes('/en') && (
            <meta
              name="description"
              content={'News, opinions and curiosities'}
            />
          )}
          {ruta.indexOf('/ca') == -1 &&
            (ruta.indexOf('/en') == -1 && (
              <meta
                name="description"
                content={'Noticias, opiniones y curiosidades'}
              />
            ))}
        </Head>
        <Center>
          <Title>Blog</Title>
          {ruta.includes('/ca') && (
            <SubTitle>Notícies, opinions i curiositats</SubTitle>
          )}
          {ruta.includes('/en') && (
            <SubTitle>News, opinions and curiosities</SubTitle>
          )}
          {ruta.indexOf('/ca') == -1 &&
            (ruta.indexOf('/en') == -1 && (
              <SubTitle>Noticias, opiniones y curiosidades</SubTitle>
            ))}
          <TextSeparator>
            <div className="here" />
          </TextSeparator>
          <Query query={ALL_POSTS_QUERY}>
            {({ data, error, loading }) => {
              if (loading) return <p>Loading...</p>
              if (error) return <p>Error: {error.message}</p>
              return (
                <ItemsList>
                  {data.posts.edges.map(item => (
                    <Item item={item} key={item.node.id} ruta={ruta} />
                  ))}
                </ItemsList>
              )
            }}
          </Query>
        </Center>
      </InnerLayout>
    )
  }
}

Items.propTypes = propTypes
Items.defaultProps = defaultProps
Items.ALL_POSTS_QUERY = ALL_POSTS_QUERY
