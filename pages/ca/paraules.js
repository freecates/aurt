import fetch from 'isomorphic-unfetch';
import InnerLayout from '../../components/InnerLayout';
import Title from '../../components/styles/Title';
import SubTitle from '../../components/styles/SubTitle';
import TextBlock from '../../components/styles/TextBlock';
import TextSeparator from '../../components/styles/TextSeparator';
import ItemStyles from '../../components/styles/ItemStyles';
import Head from 'next/head';

const Page = (props) => (
  <InnerLayout mainlayout>
    <Head>
      <title>AÜRT Restaurant | {props.post.title}</title>
      <meta name='description' content={props.post.palabras[0].frase} />
      <link
        rel='canonical'
        href={`https://www.aurtrestaurant.com${props.pathname}`}
      />
      <link
        rel='alternate'
        hrefLang={'en'}
        href={`https://www.aurtrestaurant.com/en/words}`}
      />
      <link
        rel='alternate'
        hrefLang={'es'}
        href={`https://www.aurtrestaurant.com/palabras}`}
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
      <meta property='og:description' content={props.post.palabras[0].frase} />
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
      <SubTitle>{props.post.subtitle}</SubTitle>
      <TextSeparator>
        <div className='here' />
      </TextSeparator>
      {props.notLastpalabras.map((notLastpalabra, id) => (
        <div key={id}>
          <TextBlock>
            <div className='center'>
              <strong>
                "
                <span
                  dangerouslySetInnerHTML={{
                    __html: notLastpalabra.frase,
                  }}
                />
                "
              </strong>
            </div>
          </TextBlock>
          <TextBlock>
            <div className='center'>
              <img loading='lazy'
                src={'/static/aurt-dos-punts.svg'}
                style={{ width: '41px', height: '15px' }}
              />
            </div>
          </TextBlock>
        </div>
      ))}
      {props.lastpalabras.map((lastpalabra, id) => (
        <div key={id}>
          <TextBlock>
            <div className='center'>
              <strong>
                "
                <span
                  dangerouslySetInnerHTML={{
                    __html: lastpalabra.frase,
                  }}
                />
                "
              </strong>
            </div>
          </TextBlock>
        </div>
      ))}
    </ItemStyles>
  </InnerLayout>
);

export async function getStaticProps() {
  const res = await fetch(`https://aurt-data.vercel.app/data/ca/paraules.json`);
  const post = await res.json();

  const notLastpalabras = post.palabras.slice(0, -1);

  const lastpalabras = post.palabras.slice(-1);
  return {
    props: { post, notLastpalabras, lastpalabras },
  };
}

export default Page;
