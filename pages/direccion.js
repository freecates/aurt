import fetch from 'isomorphic-unfetch';
import InnerLayout from '../components/InnerLayout';
import Title from '../components/styles/Title';
import SubTitle from '../components/styles/SubTitle';
import TextBlock from '../components/styles/TextBlock';
import TextSeparator from '../components/styles/TextSeparator';
import ItemStyles from '../components/styles/ItemStyles';
import Head from 'next/head';
import Link from 'next/link';

const Page = (props) => (
  <InnerLayout mainlayout>
    <Head>
      <title>AÜRT Restaurant | {props.post.title}</title>
      <meta
        name='description'
        content={'Passeig del Taulat 262-264, 08019 Barcelona'}
      />
    </Head>
    <ItemStyles>
      <Title>{props.post.title}</Title>
      <TextSeparator>
        <div className='here' />
      </TextSeparator>
      {props.notLastdireccionBlocks.map((notLastdireccionBlock, id) => (
        <div key={id}>
          <SubTitle
            dangerouslySetInnerHTML={{
              __html: notLastdireccionBlock.title,
            }}
          />
          {notLastdireccionBlock.logo && (
            <SubTitle>
              <img
                src={notLastdireccionBlock.logo}
                style={{ width: '58px', height: '19px' }}
              />
            </SubTitle>
          )}
          <TextBlock>
            <div
              className={notLastdireccionBlock.class}
              dangerouslySetInnerHTML={{
                __html: notLastdireccionBlock.bioText,
              }}
            />
          </TextBlock>
          <TextSeparator>
            <div className='here' />
          </TextSeparator>
        </div>
      ))}
      {props.lastdireccionBlocks.map((lastdireccionBlock, id) => (
        <div key={id}>
          <SubTitle
            dangerouslySetInnerHTML={{
              __html: lastdireccionBlock.title,
            }}
          />
          <TextBlock>
            <a
              href={
                'https://www.google.com/maps/dir/?api=1&destination=' +
                lastdireccionBlock.lat +
                ',' +
                lastdireccionBlock.lng
              }>
              <div
                className={lastdireccionBlock.class}
                dangerouslySetInnerHTML={{
                  __html: lastdireccionBlock.bioText,
                }}
              />
            </a>
          </TextBlock>
          {lastdireccionBlock.logo && (
            <SubTitle>
              <a
                href={
                  'https://www.google.com/maps/dir/?api=1&destination=' +
                  lastdireccionBlock.lat +
                  ',' +
                  lastdireccionBlock.lng
                }>
                <img
                  src={lastdireccionBlock.logo}
                  style={{ width: '960', height: '960px' }}
                />
              </a>
            </SubTitle>
          )}
        </div>
      ))}
    </ItemStyles>
  </InnerLayout>
);

export async function getStaticProps() {
  const res = await fetch(`https://aurtdata.now.sh/data/direccion.json`);
  const post = await res.json();

  const notLastdireccionBlocks = post.direccionBlocks.slice(0, -1);

  const lastdireccionBlocks = post.direccionBlocks.slice(-1);
  return {
    props: { post, notLastdireccionBlocks, lastdireccionBlocks },
  };
}

export default Page;
