import React from 'react';
import styled from 'styled-components';
import InnerLayout from './InnerLayout';
import SingleModalGalleryItem from './SingleModalGalleryItem';
import TextBlock from './styles/TextBlock';

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

const GalleryComponnet = ({ data }) => {
  return (
    <InnerLayout mainlayout>
      <SingleItemStyles>
        <TextBlock>
          <div className='center'>
            <a
              href={'https://www.instagram.com/aurtrestaurant'}
              target='_blank'
              rel='noopener'
              title={'Instragram @aurtrestaurant'}>
              <img
                loading='lazy'
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
            <a
              href={'https://www.instagram.com/aurtrestaurant'}
              target='_blank'
              rel='noopener'
              title={'Instragram @aurtrestaurant'}>
              <span>@aurtrestaurant</span>
            </a>
          </div>
        </TextBlock>
        <div className='details'>
          <ul>
            {data.map((d) => (
              <li kdey={d.id}>
                <SingleModalGalleryItem
                  singleModalItems={[
                    {
                      id: d.imatge_de_la_galeria.id,
                      mediaType: d.imatge_de_la_galeria.type,
                      src: d.imatge_de_la_galeria.sizes.thumbnail,
                      width: d.imatge_de_la_galeria.sizes['thumbnail-width'],
                      height: d.imatge_de_la_galeria.sizes['thumbnail-height'],
                      items: [
                        {
                          id: d.imatge_de_la_galeria.id,
                          mediaType: d.imatge_de_la_galeria.type,
                          srcOpen: d.imatge_de_la_galeria.url,
                          width: d.imatge_de_la_galeria.width,
                          height: d.imatge_de_la_galeria.height,
                          class: 'left',
                        },
                      ],
                      class: 'left',
                    },
                  ]}
                />
              </li>
            ))}
          </ul>
        </div>
      </SingleItemStyles>
    </InnerLayout>
  );
};

export default GalleryComponnet;
