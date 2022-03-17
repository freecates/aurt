import React from 'react';
import { useRouter } from 'next/router';
import Rodal from 'rodal';
import styled from 'styled-components';
import RodalStyles from './styles/RodalStyles';
import MenuTitle from './styles/MenuTitle';
import ImportMDFileWithHooks from './ImportMDFileWithHooks';

const RodalItem = styled.div`
  .rodal-dialog {
    border: none !important;
    box-shadow: none !important;
    width: 90vw !important;
    margin: 0;
    padding: 1em;
    top: 25vh;
    left: 5vw;
    height: 70vh !important;
    position: absolute;
    @media (min-width: 1300px) {
      width: 70vw !important;
      left: 15vw;
      top: 15vh;
      padding: 2em;
    }
  }

  .rodal-close {
    top: 1vh;
    position: fixed;
    cursor: pointer;
    right: 1vw;
  }
  .rodal-content {
    max-width: 90rem;
    margin: 0 auto;
  }
  .center {
    text-align: center;
    p {
      margin: 0;
    }

    h1 {
      margin: 0;
      text-align: center;
      font-size: 4.5rem;
      line-height: 6.1rem;
      text-transform: uppercase;
      color: ${(props) => props.theme.black};
      @media (max-width: 480px) {
        font-size: 2.8rem;
        line-height: 3.8rem;
      }
    }
    div.center {
      margin: 10px auto;
      width: 60%;
      height: 100px;
      position: relative;
      text-align: center;
    }
    div.center div.medium {
      height: 50px;
    }
    div.center div.here:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      border-left: 1px solid ${(props) => props.theme.black};
      transform: translate(-50%);
    }
  }
`;
const customStyles = {
  margin: 0,
  backgroundColor: '#ffffff',
  overflowY: 'auto',
};

const Center = styled.div`
  text-align: center;
`;

const AlignLeftMenutitle = styled(MenuTitle)`
  text-align: left;
  max-width: 90rem;
`;
const SingleModal = (props) => {
  const router = useRouter();
  const [visible, setVisible] = React.useState({ visible: 0 });

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
      router.events.off('routeChangeStart', hide)
    }
  }, [router]);
  return (
    <React.Fragment>
      {singleModalItems
        .filter((singleModalItem) => singleModalItem.class == 'left')
        .map((singleModalItem, index) => (
          <RodalStyles key={index}>
            {singleModalItem.items ? (
              <React.Fragment>
                <strong>
                  <a
                    style={{ cursor: 'pointer' }}
                    onClick={(evt) => show(evt)}
                    title={singleModalItem.name}
                    id={singleModalItem.id}
                    className='single-modal-item-name'>
                    {singleModalItem.name}
                  </a>
                </strong>
                <RodalItem className={singleModalItem.class}>
                  <Rodal
                    visible={visible == singleModalItem.id}
                    onClose={() => hide()}
                    animation='zoom'
                    duration={1000}
                    className='rodal-item'
                    showMask={true}
                    customStyles={customStyles}
                    closeOnEsc={true}
                    id={singleModalItem.id}>
                    {singleModalItem.items.map((item, id) => (
                      <React.Fragment key={`${item.name}-${id}`}>
                        <AlignLeftMenutitle>
                          <h2 className='black' title={item.name}>
                            {item.name}
                          </h2>
                        </AlignLeftMenutitle>
                        <section className='rodal-content'>
                          <div className={item.class}>
                            <ImportMDFileWithHooks file={item.file} />
                          </div>
                        </section>
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

export default SingleModal;
