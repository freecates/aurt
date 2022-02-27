import React from 'react';
import FooterStyles from './styles/FooterStyles';
import SingleModal from './SingleModal';
import Packs from '../components/Packs';

const FooterFourth = (props) => (
  <FooterStyles ruta={props.ruta} className='fourth'>
    <div>
      <section>
        <img
          loading='lazy'
          src='/static/newsletter.svg'
          className='sn'
          alt='Logo Newsletter'
          width='32'
          height='32'
        />
        <br />

        {props.ruta.includes('/ca') && (
          <React.Fragment>
            SUBSCRIU-TE A LA{' '}
            <SingleModal
              singleModalItems={[
                {
                  id: '01',
                  name: 'NEWSLETTER',
                  items: [
                    {
                      id: '0101',
                      name: 'Subscripció Newsletter',
                      file: 'ca/mailchimp.html',
                      class: 'left',
                    },
                  ],
                  class: 'left',
                },
              ]}
            />{' '}
            PER MANTENIR-TE
            <br />
            INFORMAT
          </React.Fragment>
        )}

        {props.ruta.includes('/en') && (
          <React.Fragment>
            SUBSCRIBE TO THE
            <SingleModal
              singleModalItems={[
                {
                  id: '01',
                  name: 'NEWSLETTER',
                  items: [
                    {
                      id: '0101',
                      name: 'Newsletter subscription',
                      file: 'en/mailchimp.html',
                      class: 'left',
                    },
                  ],
                  class: 'left',
                },
              ]}
            />
            TO KEEP YOU
            <br />
            INFORMED
          </React.Fragment>
        )}

        {props.ruta.indexOf('/ca') == -1 && props.ruta.indexOf('/en') == -1 && (
          <React.Fragment>
            SUBSCRÍBETE A LA
            <SingleModal
              singleModalItems={[
                {
                  id: '01',
                  name: 'NEWSLETTER',
                  items: [
                    {
                      name: 'Alta Newsletter',
                      id: '0101',
                      file: 'mailchimp.html',
                      class: 'left',
                    },
                  ],
                  class: 'left',
                },
              ]}
            />
            PARA MANTENERTE
            <br />
            INFORMADO
          </React.Fragment>
        )}
      </section>
    </div>
  </FooterStyles>
);

export default FooterFourth;
