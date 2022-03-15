import React from 'react';
import { IntlProvider, FormattedDate } from 'react-intl';
import styled from 'styled-components';
import InnerLayout from './InnerLayout';
import TextSeparator from './styles/TextSeparator';
import Head from 'next/head';
import Link from 'next/link';

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  img {
    width: 100%;
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
    color: ${(props) => props.theme.black};
    h2 {
      line-height: 3.9rem;
      font-size: 3rem;
      letter-spacing: 0.1em;
    }
  }
`;

const SingleItem = ({ data, ruta }) => {
  const post = data[0];
  const excerpt = post.excerpt.rendered
    .replace(/<p>/g, '')
    .replace(/<\/p>/g, '');
  const itemDate = post.date;
  const featuredImage = post._embedded['wp:featuredmedia'][0];
  return (
    <InnerLayout mainlayout>
      <SingleItemStyles>
        <Head>
          <title>AURT | {post.title.rendered}</title>
          <meta name='description' content={excerpt} />
          <meta
            property='og:url'
            content={`https://www.aurtrestaurant.com/item?id=${post.id}`}
          />
          <meta property='og:type' content='article' />
          <meta property='og:title' content={post.title.rendered} />
          <meta property='og:description' content={excerpt} />
          {featuredImage && (
            <React.Fragment>
              <meta
                property='og:image'
                content={`${featuredImage.source_url}`}
              />
              <meta
                property='og:image:width'
                content={`${featuredImage.media_details.sizes.full.width}`}
              />
              <meta
                property='og:image:height'
                content={`${featuredImage.media_details.sizes.full.height}`}
              />
            </React.Fragment>
          )}

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@aurtrestaurant' />
          <meta name='twitter:creator' content='@aurtrestaurant' />
          <meta name='twitter:title' content={post.title.rendered} />
          <meta name='twitter:description' content={excerpt} />
          {featuredImage && (
            <meta
              name='twitter:image:src'
              content={`${featuredImage.source_url}`}
            />
          )}

          {featuredImage && (
            <script
              type='application/ld+json'
              dangerouslySetInnerHTML={{
                __html: `
            {
              "@context": "http://schema.org",
              "@type": "NewsArticle",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.aurtrestaurant.com/item?id=${post.id}
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
              "image": "${featuredImage.source_url}",
              "datePublished": "${post.date}",
              "headline": "${post.title.rendered}"
            }`,
              }}
            />
          )}
        </Head>
        <p className='center'>
          <small>
            <IntlProvider defaultLocale='es-ES'>
              <FormattedDate value={itemDate} />
            </IntlProvider>
          </small>
        </p>
        <TextSeparator>
          <div className='medium here' />
        </TextSeparator>
        {featuredImage && (
          <img
            loading='lazy'
            src={featuredImage.media_details.sizes.large.source_url}
            alt={post.title.rendered}
            width={featuredImage.media_details.sizes.large.width}
            heigh={featuredImage.media_details.sizes.large.height}
          />
        )}
        <div className='details'>
          <h2 style={{ marginBottom: '0' }}>
            <span
              dangerouslySetInnerHTML={{
                __html: post.title.rendered,
              }}
            />{' '}
          </h2>
          <p style={{ marginTop: '0' }}>
            <small>by {post._embedded.author[0].name}</small>
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.rendered,
            }}
          />
          <h2 className='center'>
            {ruta.includes('/ca') && (
              <Link href={'/ca/items'}>
                <a title={'Tornar a Blog'}>{'<<'}</a>
              </Link>
            )}
            {ruta.includes('/en') && (
              <Link href={'/en/items'}>
                <a title={'Back to Blog'}>{'<<'}</a>
              </Link>
            )}
            {ruta.indexOf('/ca') == -1 && ruta.indexOf('/en') == -1 && (
              <Link href={'/items'}>
                <a title={'Volver a Blog'}>{'<<'}</a>
              </Link>
            )}
          </h2>
        </div>
      </SingleItemStyles>
    </InnerLayout>
  );
};

export default SingleItem;
