import styled from 'styled-components';
import InnerLayout from '@components/InnerLayout';
import Title from '@components/styles/Title';
import SubTitle from '@components/styles/SubTitle';
import BlockImg from '@components/BlockImg';
import TextSeparator from '@components/styles/TextSeparator';
import ItemStyles from '@components/styles/ItemStyles';
import Head from 'next/head';
import Link from 'next/link';

const GiftMenuStyle = styled.div`
  .gift-menu-wrapper {
    text-align: center;
    .gift-menu-data {
      strong {
        margin: 1rem auto -2rem auto;
        text-align: center;
        line-height: 2.9rem;
        font-size: 2.2rem;
        letter-spacing: 0.1em;
        color: rgb(0, 0, 0);
        display: block;
      }
      em {
        margin: 0 auto;
        max-width: 65rem;
        color: rgb(0, 0, 0);
        font-style: normal;
        display: block;
        letter-spacing: 0;
        &:first-of-type {
          margin-top: 2rem;
        }
      }
    }
  }
`;

const Gift = ({ ruta, data, voucher, titol, description }) => {
  return (
    <InnerLayout mainlayout>
      <Head>
        <title>AÜRT Restaurant | {titol}</title>
        <meta name='description' content={description} />
        <link rel='canonical' href={`https://www.aurtrestaurant.com${ruta}`} />
        <link
          rel='alternate'
          hrefLang={'en'}
          href={`https://www.aurtrestaurant.com${ruta.replace(
            /\/ca\//g,
            '/en/'
          )}`}
        />
        <link
          rel='alternate'
          hrefLang={'es'}
          href={`https://www.aurtrestaurant.com${ruta.replace(/\/ca\//g, '/')}`}
        />
        <meta
          property='og:url'
          content={`https://www.aurtrestaurant.com${ruta}`}
        />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={`AÜRT Restaurant | ${titol}`} />
        <meta property='og:description' content={description} />
        <meta
          property='og:image'
          content={
            'https://www.aurtrestaurant.com/static/icons/og-image-aurt-web.png'
          }
        />
        <meta property='og:image:width' content='1024' />
        <meta property='og:image:height' content='1024' />
      </Head>
      <ItemStyles>
        <Title
          dangerouslySetInnerHTML={{
            __html: titol,
          }}
        />
        <TextSeparator>
          <div className='here' />
        </TextSeparator>
        <Title>
          <BlockImg
            src={voucher.url}
            width={'800'}
            height={'300'}
            alt={titol}
          />
        </Title>
        <GiftMenuStyle>
          <div className='gift-menu-wrapper'>
            <div
              className='gift-menu-data'
              dangerouslySetInnerHTML={{ __html: data }}
            />
          </div>
        </GiftMenuStyle>

        <TextSeparator>
          <div className='here' />
        </TextSeparator>
        <SubTitle>
          {ruta.indexOf('/ca') == -1 && ruta.indexOf('/en') == -1 && (
            <Link href='/compra'>
              <a>COMPRA AQUÍ</a>
            </Link>
          )}
          {ruta.includes('/ca') && (
            <Link href='/ca/compra'>
              <a>COMPRA AQUÍ</a>
            </Link>
          )}
          {ruta.includes('/en') && (
            <Link href='/en/buy'>
              <a>BUY HERE</a>
            </Link>
          )}
        </SubTitle>
        <TextSeparator />
      </ItemStyles>
    </InnerLayout>
  );
};

export default Gift;
