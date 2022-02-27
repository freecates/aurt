import styled from 'styled-components';
import InnerLayout from './InnerLayout';
import TextSeparator from './styles/TextSeparator';
import Link from 'next/link';

const TastingMenuStyle = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  .tasting-menu-wrapper {
    background: rgb(206, 199, 193);
    padding: 3rem 1rem;
    font-size: 0.7em;
    line-height: 1.75em;
    letter-spacing: 0;
    .tasting-menu-data {
      margin: 0 0 0 40%;
      @media (min-width: 1024px) {
        margin: 0 0 0 44.5%;
      }
      font-weight: bolder;
      strong {
        font-size: 1.5em;
      }
      em {
        font-style: normal;
        color: rgb(145, 133, 124);
      }
      code {
        font-style: normal;
        font-size: 0.75em;
        font-family: 'neutraface_text', sans-serif;
        display: block;
        line-height: 0;
        &:last-of-type {
          margin-bottom: 2em;
        }
      }
    }
    .logo {
      margin-top: 6rem;
      text-align: center;
    }
  }
  .text-center {
    text-align: center;
  }
`;

const TastingMenu = ({ ruta, data }) => (
  <InnerLayout mainlayout ruta={ruta}>
    <TastingMenuStyle ruta={ruta}>
      <TextSeparator>
        <div className='here' />
      </TextSeparator>
      <div className='tasting-menu-wrapper'>
        <div
          className='tasting-menu-data'
          dangerouslySetInnerHTML={{ __html: data }}
        />
        <p className='logo'>
          <img src='/static/logo-aurt-white-web.svg' width={90} />
        </p>
      </div>
      <h2 className='text-center'>
        {ruta.indexOf('/ca') == -1 && ruta.indexOf('/en') == -1 && (
          <Link href={'/menu'}>
            <a title={'Volver a Menu'}>{'<<'}</a>
          </Link>
        )}
      </h2>

      <h2 className='text-center'>
        {ruta.includes('/ca') && (
          <Link href={'/ca/menu'}>
            <a title={'Tornar a Menu'}>{'<<'}</a>
          </Link>
        )}
      </h2>

      <h2 className='text-center'>
        {ruta.includes('/en') && (
          <Link href={'/en/menu'}>
            <a title={'Back to Menu'}>{'<<'}</a>
          </Link>
        )}
      </h2>
    </TastingMenuStyle>
  </InnerLayout>
);

export default TastingMenu;
