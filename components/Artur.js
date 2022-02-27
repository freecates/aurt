import styled from 'styled-components';
import InnerLayout from '@components/InnerLayout';
import Title from '@components/styles/Title';
import SubTitle from '@components/styles/SubTitle';
import BlockImg from '@components/BlockImg';
import TextBlock from '@components/styles/TextBlock';
import TextSeparator from '@components/styles/TextSeparator';
import ItemStyles from '@components/styles/ItemStyles';
import Head from 'next/head';

const ArturRecognitionStyle = styled.div`
  max-width: 65rem;
  margin: 0 auto;
  color: ${(props) => props.theme.black};
  @media (max-width: 767px) {
    max-width: 85%;
  }
  text-align: center;
  em {
    font-style: normal;
    display: block;
  }
`;

const Artur = ({ data, titol, subtitol, instagram, imatge, ruta }) => (
  <InnerLayout mainlayout>
    <Head>
      <title>AÜRT Restaurant | {titol} Martínez</title>
      <meta name='description' content={`${titol} ${subtitol}`} />
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
      <meta
        property='og:title'
        content={`AÜRT Restaurant | ${titol} Martínez`}
      />
      <meta property='og:description' content={`${titol} ${subtitol}`} />
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
      <SubTitle>
        <BlockImg
          src={imatge.url}
          width={173}
          height={173}
          alt={`artur martínez`}
          className={`with-margin`}
          borderRadius
        />
      </SubTitle>
      <Title>{titol}</Title>
      <SubTitle>{subtitol}</SubTitle>
      <TextBlock>
        <div className='center'>
          <a
            href={`https://www.instagram.com/${instagram}`}
            target='_blank'
            rel='noopener'
            title={`Instragram | ${instagram}`}>
            <img
              loading='lazy'
              alt='logo instagram '
              src='/static/Instagram_black.svg'
              style={{
                width: '28px',
                height: '28px',
                marginRight: '.25em',
                verticalAlign: 'text-bottom',
              }}
            />
          </a>
          <a
            href={`https://www.instagram.com/${instagram}`}
            target='_blank'
            rel='noopener'
            title={`Instragram | ${instagram}`}>
            <span>@{instagram}</span>
          </a>
        </div>
      </TextBlock>
      <TextSeparator>
        <div className='here' />
      </TextSeparator>

      <ArturRecognitionStyle
        dangerouslySetInnerHTML={{
          __html: data,
        }}
      />
    </ItemStyles>
  </InnerLayout>
);

export default Artur;
