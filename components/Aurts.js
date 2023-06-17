import InnerLayout from '@components/InnerLayout';
import Title from '@components/styles/Title';
import SubTitle from '@components/styles/SubTitle';
import { htmlToString } from '@utils/htmlToString';
import TextBlock from '@components/styles/TextBlock';
import TextSeparator from '@components/styles/TextSeparator';
import ItemStyles from '@components/styles/ItemStyles';
import Head from 'next/head';

const Aurts = ({ data, logo, ruta }) => {
  const description = htmlToString(data[0].descripcio_del_concepte);
  const notLasthorariosBlocks = data.slice(0, -1);
  const lasthorariosBlocks = data.slice(-1);

  return (
    <InnerLayout mainlayout>
      <Head>
        <title>AÜRT Restaurant | Aürt</title>
        <meta name='description' content={description} />
        <meta
          property='og:url'
          content={`https://www.aurtrestaurant.com${ruta}`}
        />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={'AÜRT Restaurant | Aürt'} />
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
        <Title>
          <img loading='lazy' src={logo.url} style={{ width: '268px', height: '85px' }} />
        </Title>
        <TextSeparator>
          <div className='here' />
        </TextSeparator>
        {notLasthorariosBlocks.map((d, id) => (
          <div key={id}>
            <SubTitle>{d.concepte}</SubTitle>
            <TextBlock>
              <div
                dangerouslySetInnerHTML={{
                  __html: d.descripcio_del_concepte,
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
            <SubTitle>{d.title}</SubTitle>
            <TextBlock>
              <div
                dangerouslySetInnerHTML={{
                  __html: d.descripcio_del_concepte,
                }}
              />
            </TextBlock>
          </div>
        ))}
      </ItemStyles>
    </InnerLayout>
  );
};

export default Aurts;
