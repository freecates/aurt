import routerEvents from 'next-router-events'
import Link from 'next/link'
import Rodal from 'rodal'
import styled from 'styled-components'
import RodalStyles from './styles/RodalStyles'
import TextSeparator from './styles/TextSeparator'
import MenuTitle from './styles/MenuTitle'
import NavStyles from './styles/NavStyles'
import BurgerIcon from './BurgerIcon'
import Hamburger from './styles/Hamburger'
import Popup from 'reactjs-popup'

const RodalItem = styled.div`
  .rodal-item {
    width: 100vw;
    margin: 0;
    top: unset;
    height: 80vh;
    position: fixed;
    @media (max-aspect-ratio: 5/8) {
      height: 90vh;
    }
    @media (min-width: 1300px) {
      top: unset;
      height: 80vh;
    }
  }
  .rodal-dialog {
    border: none !important;
    box-shadow: none !important;
  }
  .rodal-close {
    &::before,
    &::after {
      display: none;
    }
    top: unset;
    background: url(/static/close.svg) no-repeat center;
    position: absolute;
    cursor: pointer;
    bottom: unset;
    left: 47%;
    width: 6%;
    height: 6%;
    right: unset;
    margin-top: 1em;
    @media (min-width: 768px) {
      left: 48%;
      width: 4%;
      height: 4%;
    }
  }
`
const customStyles = {
  width: '100%',
  height: '100%',
  margin: 0,
  padding: '2em 0'
}
const contentStyle = {
  background: 'rgba(255,255,255,0',
  border: 'none',
  position: 'absolute',
  left: '25%',
  top: '10%',
  zIndex: 3001
}

const Center = styled.div`
  text-align: center;
`

class MenuItemModalMobile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: 0,
      menuModalItems: ''
    }
    this.hide = this.hide.bind(this)
    routerEvents.on('routeChangeStart', this.hide)
  }

  show(evt) {
    this.setState({ visible: evt.target.getAttribute('id') })
  }

  hide() {
    this.setState({ visible: false })
  }

  render() {
    const noOKmenuModalItems = this.props.menuModalItems
    const menuModalItems = [...noOKmenuModalItems]
    return (
      <React.Fragment>
        <Hamburger className="burger-on-bar">
          <Popup
            modal
            overlayStyle={{ background: 'rgba(255,255,255,0.98' }}
            contentStyle={contentStyle}
            closeOnDocumentClick={false}
            trigger={open => <BurgerIcon open={open} />}
          >
            {close => (
              <React.Fragment>
                <TextSeparator>
                  <div className="medium here" />
                </TextSeparator>
                <NavStyles className="left">
                  {menuModalItems
                    .filter(menuModalItem => menuModalItem.class == 'left')
                    .map(menuModalItem => (
                      <RodalStyles key={menuModalItem.id}>
                        {menuModalItem.items ? (
                          <React.Fragment>
                            <h4>
                              <a
                                className="item"
                                onClick={this.show.bind(this)}
                                title={menuModalItem.name}
                                id={menuModalItem.id}
                              >
                                {menuModalItem.name}
                              </a>
                            </h4>
                            <RodalItem>
                              <Rodal
                                visible={this.state.visible == menuModalItem.id}
                                onClose={this.hide.bind(this)}
                                animation="slideDown"
                                duration={1000}
                                className="rodal-item"
                                showMask={false}
                                customStyles={customStyles}
                                closeOnEsc={false}
                                id={menuModalItem.id}
                              >
                                <Center>
                                  <TextSeparator>
                                    <div className="medium here" />
                                  </TextSeparator>
                                  <MenuTitle>
                                    <h2 className="black">
                                      {menuModalItem.name}
                                    </h2>
                                  </MenuTitle>
                                  {menuModalItem.items.map((item, id) => (
                                    <MenuTitle key={id} close={close}>
                                      <Link href={item.path} >
                                        <h2 onClick={close} title={item.name}>
                                          {item.name}
                                        </h2>
                                      </Link>
                                    </MenuTitle>
                                  ))}
                                </Center>
                              </Rodal>
                            </RodalItem>
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            <h4 close={close}>
                              <Link href={menuModalItem.path} >
                                <a
                                  className="item"
                                  onClick={close}
                                  title={menuModalItem.name}
                                  id={menuModalItem.id}
                                >
                                  {menuModalItem.name}
                                </a>
                              </Link>
                            </h4>
                          </React.Fragment>
                        )}
                      </RodalStyles>
                    ))}
                </NavStyles>
                <NavStyles className="right">
                  {menuModalItems
                    .filter(menuModalItem => menuModalItem.class == 'right')
                    .map(menuModalItem => (
                      <RodalStyles key={menuModalItem.id}>
                        {menuModalItem.items ? (
                          <React.Fragment>
                            <h4>
                              <a
                                className="item"
                                onClick={this.show.bind(this)}
                                title={menuModalItem.name}
                                id={menuModalItem.id}
                              >
                                {menuModalItem.name}
                              </a>
                            </h4>
                            <RodalItem>
                              <Rodal
                                visible={this.state.visible == menuModalItem.id}
                                onClose={this.hide.bind(this)}
                                animation="slideDown"
                                duration={1000}
                                className="rodal-item"
                                showMask={false}
                                customStyles={customStyles}
                                closeOnEsc={false}
                                id={menuModalItem.id}
                              >
                                <Center>
                                  <TextSeparator>
                                    <div className="here medium" />
                                  </TextSeparator>
                                  <MenuTitle>
                                    <h2 className="black">
                                      {menuModalItem.name}
                                    </h2>
                                  </MenuTitle>
                                  {menuModalItem.items.map((item, id) => (
                                    <MenuTitle key={id} close={close}>
                                      <Link href={item.path} >
                                        <h2 onClick={close} title={item.name}>
                                          {item.name}
                                        </h2>
                                      </Link>
                                    </MenuTitle>
                                  ))}
                                </Center>
                              </Rodal>
                            </RodalItem>
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            <h4 close={close}>
                              <Link href={menuModalItem.path} >
                                <a
                                  className="item"
                                  onClick={close}
                                  title={menuModalItem.name}
                                  id={menuModalItem.id}
                                >
                                  {menuModalItem.name}
                                </a>
                              </Link>
                            </h4>
                          </React.Fragment>
                        )}
                      </RodalStyles>
                    ))}
                </NavStyles>
              </React.Fragment>
            )}
          </Popup>
        </Hamburger>
      </React.Fragment>
    )
  }
}

export default MenuItemModalMobile
