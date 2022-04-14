import InnerLayout from '../components/InnerLayout';
import Title from '../components/styles/Title';
import SubTitle from '../components/styles/SubTitle';
import BlockImg from '../components/BlockImg';
import TextBlock from '../components/styles/TextBlock';
import TextSeparator from '../components/styles/TextSeparator';
import ItemStyles from '../components/styles/ItemStyles';
import Head from 'next/head';

const Teams = ({ data, intro, titol, ruta }) => {
  const description = intro
          .replace(/<p>/g, '')
          .replace(/<\/p>/g, '')
          .replace(/<br \/>/g, ',');

  const notLastmemberBlocks = data.slice(0, -1);
  const lastmemberBlocks = data.slice(-1);

  return (
    <InnerLayout mainlayout>
      <Head>
        <title>AÜRT Restaurant | {titol}</title>
        <meta nom='description' content={description} />
        <link rel='canonical' href={`https://www.aurtrestaurant.com${ruta}`} />
        <link
          rel='alternate'
          hrefLang={'ca'}
          href={`https://www.aurtrestaurant.com/ca/equip`}
        />
        <link
          rel='alternate'
          hrefLang={'en'}
          href={`https://www.aurtrestaurant.com/en/team`}
        />
        <meta
          property='og:url'
          content={`https://www.aurtrestaurant.com${ruta}`}
        />
        <meta property='og:type' content='article' />
        <meta property='og:titol' content={`AÜRT Restaurant | ${titol}`} />
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
        <TextBlock
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
        <TextSeparator>
          <div className='medium here' />
        </TextSeparator>
        {notLastmemberBlocks.map((notLastmemberBlock, id) => (
          <div key={id}>
            <SubTitle>
              <BlockImg
                src={notLastmemberBlock.imatge.url}
                width={173}
                height={173}
                alt={notLastmemberBlock.nom}
                borderRadius
              />
            </SubTitle>
            <SubTitle>{notLastmemberBlock.nom}</SubTitle>
            <TextBlock>
              <div className='center'>
                <strong
                  dangerouslySetInnerHTML={{
                    __html: notLastmemberBlock.titol,
                  }}
                />
              </div>
            </TextBlock>
            <TextBlock>
              <div className='center'>
                <span
                  className='uppercase'
                  dangerouslySetInnerHTML={{
                    __html: notLastmemberBlock.cv,
                  }}
                />
              </div>
            </TextBlock>
            {notLastmemberBlock.recognitions && (
              <TextBlock>
                <div className='center'>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: notLastmemberBlock.recognitions,
                    }}
                  />
                </div>
              </TextBlock>
            )}
            {notLastmemberBlock.instagram && (
              <TextBlock>
                <div className='center'>
                  <a
                    href={
                      'https://www.instagram.com/' +
                      notLastmemberBlock.instagram
                    }
                    target='_blank'
                    titol={'Instragram' + notLastmemberBlock.instagram}
                    rel={'noopener, noreferrer'}>
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
                    href={
                      'https://www.instagram.com/' +
                      notLastmemberBlock.instagram
                    }
                    target='_blank'
                    titol={'Instragram' + notLastmemberBlock.instagram}
                    rel={'noopener, noreferrer'}>
                    <span>@{notLastmemberBlock.instagram}</span>
                  </a>
                </div>
              </TextBlock>
            )}
            <TextSeparator>
              <div className='medium here' />
            </TextSeparator>
          </div>
        ))}
        {lastmemberBlocks.map((lastmemberBlock, id) => (
          <div key={id}>
            <SubTitle>
              <BlockImg
                src={lastmemberBlock.imatge.url}
                width={173}
                height={173}
                alt={lastmemberBlock.nom}
                borderRadius
              />
            </SubTitle>
            <SubTitle>{lastmemberBlock.nom}</SubTitle>
            <TextBlock>
              <div className='center'>
                <strong
                  dangerouslySetInnerHTML={{
                    __html: lastmemberBlock.titol,
                  }}
                />
              </div>
            </TextBlock>
            <TextBlock>
              <div className='center'>
                <span
                  className='uppercase'
                  dangerouslySetInnerHTML={{
                    __html: lastmemberBlock.cv,
                  }}
                />
              </div>
            </TextBlock>
            {lastmemberBlock.recognitions && (
              <TextBlock>
                <div className='center'>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: lastmemberBlock.recognitions,
                    }}
                  />
                </div>
              </TextBlock>
            )}
            {lastmemberBlock.instagram && (
              <TextBlock>
                <div className='center'>
                  <a
                    href={
                      'https://www.instagram.com/' + lastmemberBlock.instagram
                    }
                    target='_blank'
                    titol={'Instragram' + lastmemberBlock.instagram}>
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
                    href={
                      'https://www.instagram.com/' + lastmemberBlock.instagram
                    }
                    target='_blank'
                    titol={'Instragram' + lastmemberBlock.instagram}>
                    <span>@{lastmemberBlock.instagram}</span>
                  </a>
                </div>
              </TextBlock>
            )}
          </div>
        ))}
      </ItemStyles>
    </InnerLayout>
  );
};

export default Teams;
