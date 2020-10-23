import InnerLayout from '../../components/InnerLayout';
import fetch from 'isomorphic-unfetch';
import Title from '../../components/styles/Title';
import SubTitle from '../../components/styles/SubTitle';
import TextBlock from '../../components/styles/TextBlock';
import BlockImg from '../../components/BlockImg';
import TextSeparator from '../../components/styles/TextSeparator';
import ItemStyles from '../../components/styles/ItemStyles';
import Head from 'next/head';

const Page = (props) => (
  <InnerLayout mainlayout>
    <Head>
      <title>AÜRT Restaurant | {props.post.title}</title>
      <meta name='description' content={props.description} />
      <link
        rel='canonical'
        href={`https://www.aurtrestaurant.com${props.pathname}`}
      />
      <link
        rel='alternate'
        hrefLang={'ca'}
        href={`https://www.aurtrestaurant.com/ca/equip`}
      />
      <link
        rel='alternate'
        hrefLang={'es'}
        href={`https://www.aurtrestaurant.com/equipo`}
      />
      <meta
        property='og:url'
        content={`https://www.aurtrestaurant.com${props.pathname}`}
      />
      <meta property='og:type' content='article' />
      <meta
        property='og:title'
        content={`AÜRT Restaurant | ${props.post.title}`}
      />
      <meta property='og:description' content={props.description} />
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
      <Title>{props.post.title}</Title>
      <TextSeparator>
        <div className='here' />
      </TextSeparator>
      <TextBlock
        dangerouslySetInnerHTML={{
          __html: props.post.introText,
        }}
      />
      <TextSeparator>
        <div className='medium here' />
      </TextSeparator>
      {props.notLastmemberBlocks.map((notLastmemberBlock, id) => (
        <div key={id}>
          <SubTitle>
            <BlockImg src={notLastmemberBlock.picture} width={173} height={173} alt={notLastmemberBlock.name} borderRadius/>
          </SubTitle>
          <SubTitle>{notLastmemberBlock.name}</SubTitle>
          <TextBlock>
            <div className='center'>
              <strong
                dangerouslySetInnerHTML={{
                  __html: notLastmemberBlock.title,
                }}
              />
            </div>
          </TextBlock>
          <TextBlock>
            <div className='center'>
              <span
                className='uppercase'
                dangerouslySetInnerHTML={{
                  __html: notLastmemberBlock.memberText,
                }}
              />
            </div>
          </TextBlock>
          {notLastmemberBlock.secondMemberText && (
            <TextBlock>
              <div className='center'>
                <span
                  dangerouslySetInnerHTML={{
                    __html: notLastmemberBlock.secondMemberText,
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
                    'https://www.instagram.com/' + notLastmemberBlock.instagram
                  }
                  target='_blank'
                  title={'Instragram' + notLastmemberBlock.instagram}>
                  <img loading='lazy'
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
                    'https://www.instagram.com/' + notLastmemberBlock.instagram
                  }
                  target='_blank'
                  title={'Instragram' + notLastmemberBlock.instagram}>
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
      {props.lastmemberBlocks.map((lastmemberBlock, id) => (
        <div key={id}>
          <SubTitle>
            <BlockImg src={lastmemberBlock.picture} width={173} height={173} alt={lastmemberBlock.name} borderRadius/>
          </SubTitle>
          <SubTitle>{lastmemberBlock.name}</SubTitle>
          <TextBlock>
            <div className='center'>
              <strong
                dangerouslySetInnerHTML={{
                  __html: lastmemberBlock.title,
                }}
              />
            </div>
          </TextBlock>
          <TextBlock>
            <div className='center'>
              <span
                className='uppercase'
                dangerouslySetInnerHTML={{
                  __html: lastmemberBlock.memberText,
                }}
              />
            </div>
          </TextBlock>
          {lastmemberBlock.secondMemberText && (
            <TextBlock>
              <div className='center'>
                <span
                  dangerouslySetInnerHTML={{
                    __html: lastmemberBlock.secondMemberText,
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
                  title={'Instragram' + lastmemberBlock.instagram}>
                  <img loading='lazy'
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
                  title={'Instragram' + lastmemberBlock.instagram}>
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

export async function getStaticProps() {
  const res = await fetch(`https://aurt-data.vercel.app/data/en/team.json`);
  const post = await res.json();

  const description = [
    ...new Set(
      post.memberBlocks.map(({ name }) =>
        name
          .replace(/<strong>/g, '')
          .replace(/<\/strong>/g, '')
          .replace(/<br\/>/g, ',')
      )
    ),
  ];

  const notLastmemberBlocks = post.memberBlocks.slice(0, -1);

  const lastmemberBlocks = post.memberBlocks.slice(-1);

  return {
    props: { post, notLastmemberBlocks, lastmemberBlocks, description }, // will be passed to the page component as props
  };
}

export default Page;
