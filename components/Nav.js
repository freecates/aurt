import React from 'react';
import MenuItemModal from './MenuItemModal'
import MenuLang from './MenuLang'
import MenuReservation from './MenuReservation'
import MediaQuery from 'react-responsive'
import MenuItemModalMobile from './MenuItemModalMobile'
import Awards from './Awards';

const Nav = props => (
  <React.Fragment>
    <MediaQuery maxDeviceWidth={960}>
      <MenuItemModalMobile menuModalItems={props.content} />
    </MediaQuery>
    <MediaQuery minDeviceWidth={1024}>
      <MenuItemModal menuModalItems={props.content}/>
    </MediaQuery>
    <MenuLang langMenu={props.langMenu} ruta={props.ruta} />
    <MenuReservation menuModalItems={props.content} ruta={props.ruta} />
    <Awards ruta={props.ruta} />
  </React.Fragment>
)

export default Nav
