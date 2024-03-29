import React from 'react';
import { useRouter } from 'next/router';
import Rodal from 'rodal';
import styled from 'styled-components';
import MenuTitle from './styles/MenuTitle';
import RodalStyles from './styles/RodalStyles';

const RodalItem = styled.div`
  .rodal-dialog {
    border: none !important;
    box-shadow: none !important;
    width: 90vw !important;
    margin: 0;
    padding: 1em;
    top: 13vh;
    left: 5vw;
    height: 90vh !important;
    position: absolute;
    @media (min-width: 1300px) {
      padding: 1em;
    }
  }

  .rodal-close {
    &::before,
    &::after {
      display: none;
    }
    top: unset;
    background: url(/static/close.svg) no-repeat;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 40vw;
    width: 10vw;
    height: 10vh;
    right: unset;
    @media (min-width: 768px) {
      left: 42vw;
      width: 6vw;
      height: 6vh;
    }
    @media (min-width: 1024px) {
      left: 43vw;
    }
  }

  .rodal-content {
    max-width: 100%;
    margin: 0 auto;
  }
`;
const customStyles = {
  margin: 0,
  backgroundColor: 'transparent',
};

const Center = styled.div`
  text-align: center;
`;

const AlignLeftMenutitle = styled(MenuTitle)`
  text-align: left;
  max-width: 95rem;
`;

const SingleModalGalleryItem = (props) => {
  const router = useRouter();
  const [visible, setVisible] = React.useState(0);

  const noOKsingleModalItems = props.singleModalItems;
  const singleModalItems = [...noOKsingleModalItems];

  const show = (evt) => {
    setVisible(evt.target.getAttribute('id'));
  };

  const hide = () => {
    setVisible(false);
  };

  React.useEffect(() => {
    router.events.on('routeChangeStart', hide);
    return () => {
      router.events.off('routeChangeStart', hide);
    };
  }, [router]);

  return (
    <React.Fragment>
      {singleModalItems
        .filter((singleModalItem) => singleModalItem.class == 'left')
        .map((singleModalItem) => (
          <RodalStyles key={singleModalItem.id}>
            {singleModalItem.items ? (
              <React.Fragment>
                {singleModalItem.mediaType == 'file' && (
                  <figure onClick={(evt) => show(evt)}>
                    <img
                      loading='lazy'
                      src={'/static/play.svg'}
                      width={'150'}
                      height={'150'}
                      style={{ cursor: 'pointer' }}
                      id={singleModalItem.id}
                    />
                  </figure>
                )}
                {singleModalItem.mediaType == 'image' && (
                  <figure onClick={(evt) => show(evt)}>
                    <img
                      loading='lazy'
                      src={singleModalItem.src}
                      width={singleModalItem.width}
                      height={singleModalItem.height}
                      style={{ cursor: 'pointer' }}
                      id={singleModalItem.id}
                    />
                  </figure>
                )}
                <RodalItem className={singleModalItem.class}>
                  <Rodal
                    visible={visible == singleModalItem.id}
                    onClose={() => hide()}
                    animation='zoom'
                    duration={500}
                    className='rodal-item'
                    showMask={true}
                    customStyles={customStyles}
                    closeOnEsc={true}
                    id={singleModalItem.id}>
                    {singleModalItem.items.map((item, id) => (
                      <React.Fragment>
                        <AlignLeftMenutitle key={id}>
                          {item.mediaType == 'image' && (
                            <img
                              loading='lazy'
                              src={item.srcOpen}
                              width={item.width}
                              height={item.height}
                              alt={'Aurt Restaurant photo'}
                            />
                          )}{' '}
                          {item.mediaType == 'file' && (
                            <video controls>
                              <source
                                src={item.srcOpen + '#t=1'}
                                type='video/mp4'
                              />
                            </video>
                          )}
                        </AlignLeftMenutitle>
                      </React.Fragment>
                    ))}
                  </Rodal>
                </RodalItem>
              </React.Fragment>
            ) : (
              ''
            )}
          </RodalStyles>
        ))}
    </React.Fragment>
  );
};

export default SingleModalGalleryItem;
