import SingleModal from './SingleModal';
import FooterStyles from './styles/FooterStyles';

const FooterSecond = (props) => (
  <FooterStyles ruta={props.ruta} className='second'>
    <div>
      <section>
        <a
          href='https://www.slowfood.barcelona/'
          target='_blank'
          rel='noopener'>
          <img loading='lazy'
            src='/static/slow-food.svg'
            className=''
            alt='Logo Slow Food Barcelona'
          />
        </a>
      </section>
      <section>
        <a
          href='https://twitter.com/aurtrestaurant'
          target='_blank'
          rel='noopener'>
          <img loading='lazy' src='/static/twitter.svg' className='sn' alt='Logo Twitter' />
        </a>
        <a href='https://www.facebook.com/aurtrestaurant/'>
          <img loading='lazy' src='/static/facebook.svg' className='sn' alt='Logo Facebook' />
        </a>
        <a href='https://www.youtube.com/channel/UCjaXo2Ys8A3jFhMZd22fxmQ'>
          <img loading='lazy' src='/static/youtube.svg' className='sn' alt='Logo Youtube' />
        </a>
        <a
          href='https://www.instagram.com/aurtrestaurant/'
          target='_blank'
          rel='noopener'>
          <img loading='lazy'
            src='/static/instagram.svg'
            className='sn'
            alt='Logo Instagram'
          />
        </a>
        <br />

        {props.ruta.includes('/ca') && (
          <React.Fragment>
            <SingleModal
              singleModalItems={[
                {
                  id: '01',
                  name: 'AVIS LEGAL',
                  items: [
                    {
                      id: '0101',
                      name: "Contracte d'informació i ús del lloc.",
                      file: 'ca/avis-legal.md',
                      class: 'left',
                    },
                  ],
                  class: 'left',
                },
              ]}
            />
            <SingleModal
              singleModalItems={[
                {
                  id: '02',
                  name: 'POLÍTICA DE PRIVACITAT',
                  items: [
                    {
                      id: '0201',
                      name:
                        'Declaració de privacitat mundial de Hilton Worldwide Holdings Inc.',
                      file: 'ca/politica-de-privacitat.md',
                      class: 'left',
                    },
                  ],
                  class: 'left',
                },
              ]}
            />
            <SingleModal
              singleModalItems={[
                {
                  id: '03',
                  name: 'POLÍTICA DE COOKIES',
                  items: [
                    {
                      id: '0301',
                      name:
                        'Declaració sobre les galetes i altres tecnologies de Hilton Worldwide Holdings Inc',
                      file: 'ca/politica-de-cookies.md',
                      class: 'left',
                    },
                  ],
                  class: 'left',
                },
              ]}
            />
            <SingleModal
              singleModalItems={[
                {
                  id: '04',
                  name: 'CRÈDITS',
                  items: [
                    {
                      id: '0401',
                      file: 'ca/credits.md',
                      class: 'center',
                    },
                  ],
                  class: 'left',
                },
              ]}
            />
          </React.Fragment>
        )}

        {props.ruta.includes('/en') && (
          <React.Fragment>
            <SingleModal
              singleModalItems={[
                {
                  id: '01',
                  name: 'LEGAL ADVICE',
                  items: [
                    {
                      id: '0101',
                      name: 'Site Usage and Information Agreement.',
                      file: 'en/legal-advice.md',
                      class: 'left',
                    },
                  ],
                  class: 'left',
                },
              ]}
            />
            <SingleModal
              singleModalItems={[
                {
                  id: '02',
                  name: 'PRIVACY POLICY',
                  items: [
                    {
                      id: '0201',
                      name: 'Global Privacy Statement',
                      file: 'en/privacy-policy.md',
                      class: 'left',
                    },
                  ],
                  class: 'left',
                },
              ]}
            />
            <SingleModal
              singleModalItems={[
                {
                  id: '03',
                  name: 'COOKIES',
                  items: [
                    {
                      id: '0301',
                      name:
                        'Hilton Worldwide Holdings Inc. Statement Regarding Cookies and Other Technologies',
                      file: 'en/cookies.md',
                      class: 'left',
                    },
                  ],
                  class: 'left',
                },
              ]}
            />
            <SingleModal
              singleModalItems={[
                {
                  id: '04',
                  name: 'CREDITS',
                  items: [
                    {
                      id: '0401',
                      file: 'en/credits.md',
                      class: 'center',
                    },
                  ],
                  class: 'left',
                },
              ]}
            />
          </React.Fragment>
        )}

        {props.ruta.indexOf('/ca') == -1 && props.ruta.indexOf('/en') == -1 && (
          <React.Fragment>
            <SingleModal
              singleModalItems={[
                {
                  id: '01',
                  name: 'AVISO LEGAL',
                  items: [
                    {
                      id: '0101',
                      name: 'Contrato de información y uso del sitio.',
                      file: 'aviso-legal.md',
                      class: 'left',
                    },
                  ],
                  class: 'left',
                },
              ]}
            />
            <SingleModal
              singleModalItems={[
                {
                  id: '02',
                  name: 'POLÍTICA DE PRIVACIDAD',
                  items: [
                    {
                      id: '0201',
                      name:
                        'Declaración de privacidad mundial de Hilton Worldwide Holdings Inc.',
                      file: 'politica-de-privacidad.md',
                      class: 'left',
                    },
                  ],
                  class: 'left',
                },
              ]}
            />
            <SingleModal
              singleModalItems={[
                {
                  id: '03',
                  name: 'POLÍTICA DE COOKIES',
                  items: [
                    {
                      id: '0301',
                      name:
                        'Declaración acerca de las cookies y otras tecnologías de Hilton Worldwide Holdings Inc.',
                      file: 'politica-de-cookies.md',
                      class: 'left',
                    },
                  ],
                  class: 'left',
                },
              ]}
            />
            <SingleModal
              singleModalItems={[
                {
                  id: '04',
                  name: 'CRÉDITOS',
                  items: [
                    {
                      id: '0401',
                      file: 'creditos.md',
                      class: 'center',
                    },
                  ],
                  class: 'left',
                },
              ]}
            />
          </React.Fragment>
        )}
      </section>
      <p>
        &copy; 2019 HILTON
        <br />
        <strong>byArturMartinez.com</strong>
      </p>
    </div>
  </FooterStyles>
);

export default FooterSecond;
