import Iframe from 'react-iframe'

const ReservaMobil = props => (
  <div style={props.style}>
    <Iframe
      url="https://www.opentable.es/widget/reservation/canvas?rid=156108&type=standard&theme=standard&overlay=false&domain=es&lang=es-ES&r3abvariant=false&r3uid=xuFbT-x_h&newtab=false&disablega=false"
      width="100%"
      height="301px"
      id="aurt-reservar"
      className="aurt-reservas-brown"
      display="initial"
      position="relative"
      allowFullScreen
    />
  </div>
)

export default ReservaMobil
