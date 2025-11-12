import InnerLayout from '@components/InnerLayout';
import Title from '@components/styles/Title';
import SubTitle from '@components/styles/SubTitle';
import TextBlock from '@components/styles/TextBlock';
import TextSeparator from '@components/styles/TextSeparator';
import ItemStyles from '@components/styles/ItemStyles';
import Head from 'next/head';

const Openings = ({ data, titol, ruta }) => {
  const description = [
    ...new Set(
      data.map(({ horari }) =>
        horari
          .replace(/<p>/g, '')
          .replace(/<\/p>/g, '')
          .replace(/<br \/>/g, ',')
      )
    ),
  ];
  const notLasthorariosBlocks = data.slice(0, -1);
  const lasthorariosBlocks = data.slice(-1);

  return (
    <InnerLayout mainlayout>
      <Head>
        <title>AÜRT Restaurant | {titol}</title>
        <meta name='description' content={description} />
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
        <Title>{titol}</Title>
        <TextSeparator>
          <div className='here' />
        </TextSeparator>
        {notLasthorariosBlocks.map((d, id) => (
          <div key={id}>
            <SubTitle>{d.tipus_dhorari}</SubTitle>
            {d.logo && (
              <SubTitle>
                <img
                  loading='lazy'
                  src={d.logo}
                  style={{ width: '58px', height: '19px' }}
                />
              </SubTitle>
            )}
            <TextBlock>
              <div
                className={'center'}
                dangerouslySetInnerHTML={{
                  __html: d.horari,
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
            <SubTitle>{d.tipus_dhorari}</SubTitle>
            <TextBlock>
              <div
                className={'center'}
                dangerouslySetInnerHTML={{
                  __html: d.horari,
                }}
              />
            </TextBlock>
          </div>
        ))}
      </ItemStyles>
    </InnerLayout>
  );
};

export default Openings;
