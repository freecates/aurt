import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import React from 'react';
import { Query } from '@apollo/client/react/components';
import styled from 'styled-components';
import Error from './ErrorMessage';
import InnerLayout from './InnerLayout';
import SingleModalGalleryItem from './SingleModalGalleryItem';
import TextBlock from './styles/TextBlock';

const propTypes = {
  ruta: PropTypes.object.isRequired,
};

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  img,
  video {
    width: 100%;
    max-height: 780px;
    object-fit: contain;
    height: auto;
  }
  .details {
    margin: 0 1rem;
    font-size: 2rem;
  }
  .center {
    text-align: center;
    margin-bottom: 0;
  }
  ul {
    margin: 0 auto;
    padding: 0;
    max-width: 30rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-items: stretch;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    list-style-type: none;
    @media (min-width: 568px) {
      grid-template-columns: 1fr 1fr 1fr;
      max-width: 40rem;
    }
    @media (min-width: 1360px) {
      max-width: 50rem;
    }
    figure {
      margin: 0;
      padding: 0;
      img,
      video {
        padding: 0.25em;
        max-width: 100%;
        width: 140px;
        height: 140px;
        object-fit: cover;
        @media (min-width: 1360px) {
          width: 160px;
          height: 160px;
        }
      }
      video {
        object-fit: contain;
      }
    }
  }
`;

export const MEDIA_ITEMS_QUERY = gql`
  query MEDIA_ITEMS_QUERY {
    mediaItems(first: 60) {
      edges {
        node {
          id
          link
          caption
          altText
          description
          mediaType
          sourceUrl
          mediaDetails {
            height
            width
            sizes {
              name
              file
              width
              height
              mimeType
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

const defaultProps = {};

export default class LaGaleria extends React.Component {
  render() {
    return (
      <InnerLayout mainlayout>
        <Query query={MEDIA_ITEMS_QUERY}>
          {({ error, loading, data }) => {
            if (error) return <Error error={error} />;
            if (loading) return <p>Loading...</p>;
            if (!data.mediaItems) return <p>No Media found</p>;
            const medias = data.mediaItems.edges;
            // console.log('Llargada Galeria')
            // console.log(medias.length)
            const galeriaMedias = [
              ...new Set(
                medias.filter(media => media.node.link.includes('/galeria'))
              ),
            ];
            // console.log('Hola Galeria')
            // console.log(galeriaMedias)
            return (
              <SingleItemStyles>
                <TextBlock>
                  <div className='center'>
                      <a href={'https://www.instagram.com/aurtrestaurant'}
                        target='_blank'
                        rel='noopener'
                        title={'Instragram @aurtrestaurant'}>
                        <img loading='lazy'
                          alt='logo instagram'
                          src='/static/Instagram_black.svg'
                          width='28'
                          height='28'
                          style={{
                            width: '28px',
                            height: '28px',
                            marginRight: '.25em',
                            verticalAlign: 'text-bottom',
                          }}
                        />
                      </a>
                      <a href={'https://www.instagram.com/aurtrestaurant'}
                        target='_blank'
                        rel='noopener'
                        title={'Instragram @aurtrestaurant'}>
                        <span>@aurtrestaurant</span>
                      </a>
                  </div>
                </TextBlock>
                <div className='details'>
                  <ul>
                    {galeriaMedias.map((galeriaMedia, index) => (
                      <li kdey={index}>
                        {galeriaMedia.node.mediaType == 'image' && (
                          <React.Fragment>
                            <SingleModalGalleryItem
                              singleModalItems={[
                                {
                                  id: galeriaMedia.node.id,
                                  mediaType: galeriaMedia.node.mediaType,
                                  src:
                                    galeriaMedia.node.mediaDetails.sizes[0]
                                      .sourceUrl,
                                  width: galeriaMedia.node.mediaDetails.sizes[0]
                                  .width,
                                  height: galeriaMedia.node.mediaDetails.sizes[0]
                                  .height,
                                  items: [
                                    {
                                      id: galeriaMedia.node.id,
                                      mediaType: galeriaMedia.node.mediaType,
                                      srcOpen: galeriaMedia.node.sourceUrl,
                                      width: galeriaMedia.node.mediaDetails.sizes[2].width,
                                      height: galeriaMedia.node.mediaDetails.sizes[2].height,
                                      class: 'left',
                                    },
                                  ],
                                  class: 'left',
                                },
                              ]}
                            />
                          </React.Fragment>
                        )}
                        {galeriaMedia.node.mediaType == 'file' && (
                          <React.Fragment>
                            <SingleModalGalleryItem
                              singleModalItems={[
                                {
                                  id: galeriaMedia.node.id,
                                  src: galeriaMedia.node.sourceUrl,
                                  mediaType: galeriaMedia.node.mediaType,
                                  items: [
                                    {
                                      id: galeriaMedia.node.id,
                                      mediaType: galeriaMedia.node.mediaType,
                                      srcOpen: galeriaMedia.node.sourceUrl,
                                      class: 'left',
                                    },
                                  ],
                                  class: 'left',
                                },
                              ]}
                            />
                          </React.Fragment>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </SingleItemStyles>
            );
          }}
        </Query>
      </InnerLayout>
    );
  }
}

LaGaleria.propTypes = propTypes;
LaGaleria.defaultProps = defaultProps;
LaGaleria.MEDIA_ITEMS_QUERY = MEDIA_ITEMS_QUERY;
