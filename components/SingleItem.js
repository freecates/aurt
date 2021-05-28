import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider, FormattedDate } from 'react-intl'
import gql from 'graphql-tag'
import { Query } from '@apollo/client/react/components'
import Error from './ErrorMessage'
import styled from 'styled-components'
import InnerLayout from './InnerLayout'
import TextSeparator from './styles/TextSeparator'
import Head from 'next/head'
import Link from 'next/link'

const propTypes = {
  ruta: PropTypes.string.isRequired
}

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
  .center {
    text-align: center;
    margin-bottom: 0;
  }
  blockquote {
    margin: 0 auto;
    text-align: center;
    max-width: 44rem;
    color: ${props => props.theme.black};
    h2 {
      line-height: 3.9rem;
      font-size: 3rem;
      letter-spacing: 0.1em;
    }
  }
`

export const SINGLE_POST_QUERY = gql`  
query SINGLE_POST_QUERY($id: ID!) {
  post(id: $id) {
    id
    title
    date
    author {
      node {
        name
      }
    }
    slug
    featuredImage {
      node {
        id
        sourceUrl
        mediaDetails {
          sizes {
            name
            width
            height
          }
        }
      }
    }
    excerpt
    content
  }
}
`

const defaultProps = {}

export default class SingleItem extends React.Component {
  render() {
    const ruta = this.props.ruta
    return (
      <InnerLayout mainlayout>
        <Query query={SINGLE_POST_QUERY} variables={{ id: this.props.id }}>
          {({ error, loading, data }) => {
            if (error) return <Error error={error} />
            if (loading) return <p>Loading...</p>
            if (!data.post) return <p>No post found for {this.props.id}</p>
            const post = data.post
            const excerpt = post.excerpt
              .replace(/<p>/g, '')
              .replace(/<\/p>/g, '')
            const itemDate = post.date
            return (
              <SingleItemStyles>
                <Head>
                  <title>AURT | {post.title}</title>
                  <meta name="description" content={excerpt} />
                  <meta
                    property="og:url"
                    content={`https://www.aurtrestaurant.com/item?id=${
                      post.id
                    }`}
                  />
                  <meta property="og:type" content="article" />
                  <meta property="og:title" content={post.title} />
                  <meta property="og:description" content={excerpt} />
                  {post.featuredImage && (
                    <React.Fragment>
                      <meta
                        property="og:image"
                        content={`${post.featuredImage.node.sourceUrl}`}
                      />
                      <meta
                        property="og:image:width"
                        content={`${
                          post.featuredImage.node.mediaDetails.sizes[3].width
                        }`}
                      />
                      <meta
                        property="og:image:height"
                        content={`${
                          post.featuredImage.node.mediaDetails.sizes[3].height
                        }`}
                      />
                    </React.Fragment>
                  )}

                  <meta name="twitter:card" content="summary_large_image" />
                  <meta name="twitter:site" content="@aurtrestaurant" />
                  <meta name="twitter:creator" content="@aurtrestaurant" />
                  <meta name="twitter:title" content={post.title} />
                  <meta name="twitter:description" content={excerpt} />
                  {post.featuredImage && (
                    <meta
                      name="twitter:image:src"
                      content={`${post.featuredImage.sourceUrl}`}
                    />
                  )}

                  {post.featuredImage && (
                    <script
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: `
                      {
                        "@context": "http://schema.org",
                        "@type": "NewsArticle",
                        "mainEntityOfPage": {
                          "@type": "WebPage",
                          "@id": "https://www.aurtrestaurant.com/item?id=${
                            post.id
                          }
                            }}"
                        },
                        "author": {
                          "@type": "Person",
                          "name": "Artur Martínez"
                        },
                        "publisher": {
                        "@type": "Organization",
                        "name": "AÜRT Restaurant",
                        "logo": {
                          "@type": "ImageObject",
                          "url": "https://www.aurtrestaurant.com/static/icons/android-chrome-512x512.png"
                        }
                        }, 
                        "description": "${excerpt}",
                        "image": "${post.featuredImage.node.sourceUrl}",
                        "datePublished": "${post.date}",
                        "headline": "${post.title}"
                      }`
                      }}
                    />
                  )}
                </Head>
                <p className="center">
                  <small>
                    <IntlProvider defaultLocale="es-ES">
                      <FormattedDate value={itemDate} />
                    </IntlProvider>
                  </small>
                </p>
                <TextSeparator>
                  <div className="medium here" />
                </TextSeparator>
                {post.featuredImage && (
                  <img loading='lazy' src={post.featuredImage.node.sourceUrl} alt={post.title} />
                )}
                <div className="details">
                  <h2 style={{ marginBottom: '0' }}>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: post.title
                      }}
                    />{' '}
                  </h2>
                  <p style={{ marginTop: '0' }}>
                    <small>by {post.author.node.name}</small>
                  </p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.content
                    }}
                  />
                  <h2 className="center">
                    {ruta.includes('/ca') && (
                      <Link href={'/ca/items'} >
                        <a title={'Tornar a Blog'}>{'<<'}</a>
                      </Link>
                    )}
                    {ruta.includes('/en') && (
                      <Link href={'/en/items'} >
                        <a title={'Back to Blog'}>{'<<'}</a>
                      </Link>
                    )}
                    {ruta.indexOf('/ca') == -1 &&
                      (ruta.indexOf('/en') == -1 && (
                        <Link href={'/items'} >
                          <a title={'Volver a Blog'}>{'<<'}</a>
                        </Link>
                      ))}
                  </h2>
                </div>
              </SingleItemStyles>
            )
          }}
        </Query>
      </InnerLayout>
    )
  }
}

SingleItem.propTypes = propTypes
SingleItem.defaultProps = defaultProps
SingleItem.SINGLE_POST_QUERY = SINGLE_POST_QUERY
