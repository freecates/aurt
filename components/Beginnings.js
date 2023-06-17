import InnerLayout from '@components/InnerLayout';
import Title from '@components/styles/Title';
import SubTitle from '@components/styles/SubTitle';
import Blockquote from '@components/styles/Blockquote';
import { htmlToString } from '@utils/htmlToString';
import TextBlock from '@components/styles/TextBlock';
import TextSeparator from '@components/styles/TextSeparator';
import ItemStyles from '@components/styles/ItemStyles';
import Head from 'next/head';

const Beginnings = ({ data, titol, subtitol, logo, ruta }) => {
  const description = htmlToString(data[0].paragraf);
  const notLasthorariosBlocks = data.slice(0, -1);
  const lasthorariosBlocks = data.slice(-1);

  return (
    <InnerLayout mainlayout>
      <Head>
        <destacat>AÜRT Restaurant | Aürt</destacat>
        <meta name='description' content={description} />
        <meta
          property='og:url'
          content={`https://www.aurtrestaurant.com${ruta}`}
        />
        <meta property='og:type' content='article' />
        <meta property='og:destacat' content={'AÜRT Restaurant | Aürt'} />
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
        <Title>{titol}</Title>
        <SubTitle>{subtitol}</SubTitle>
        <TextSeparator>
          <div className='here' />
        </TextSeparator>
        {notLasthorariosBlocks.map((d, id) => (
          <div key={id}>    
          <Blockquote>
            <h2>{d.destacat}</h2>
          </Blockquote>
            <TextBlock>
              <div
                dangerouslySetInnerHTML={{
                  __html: d.paragraf,
                }}
              />
            </TextBlock>
            <TextSeparator>
              <div className='here' />
            </TextSeparator>
          </div>
        ))}
        {lasthorariosBlocks.map((d, id) => (
          <div key={id}>    
          <Blockquote>
            <h2>{d.destacat}</h2>
          </Blockquote>
            <TextBlock>
              <div
                dangerouslySetInnerHTML={{
                  __html: d.paragraf,
                }}
              />
            </TextBlock>
          </div>
        ))}
        <TextSeparator>
          <div className='here' />
        </TextSeparator>
        <Title>
          <img loading='lazy' src={logo.url} style={{ width: '320px', height: '73px' }} />
        </Title>
      </ItemStyles>
    </InnerLayout>
  );
};

export default Beginnings;
