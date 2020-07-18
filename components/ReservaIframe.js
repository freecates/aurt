import Iframe from 'react-iframe'

const ReservaIframe = props => (
  <React.Fragment>
    {props.ruta.includes('/ca') && (
      <Iframe
        url="https://www.covermanager.com/reserve/module_restaurant/restaurante-aurtx/catalan"
        width="100%"
        height="100vh"
        id="aurt-reservar"
        className="aurt-reservas-brown"
        display="initial"
        position="relative"
        allowFullScreen
      />
    )}
    {props.ruta.includes('/en') && (
      <Iframe
        url="https://www.covermanager.com/reserve/module_restaurant/restaurante-aurtx/english"
        width="100%"
        height="100vh"
        id="aurt-reservar"
        className="aurt-reservas-brown"
        display="initial"
        position="relative"
        allowFullScreen
      />
    )}
    {props.ruta.indexOf('/ca') == -1 &&
      (props.ruta.indexOf('/en') == -1 && (
        <Iframe
          url="https://www.covermanager.com/reserve/module_restaurant/restaurante-aurtx/spanish"
          width="100%"
          height="100vh"
          id="aurt-reservar"
          className="aurt-reservas-brown"
          display="initial"
          position="relative"
          allowFullScreen
        />
      ))}
  </React.Fragment>
)

export default ReservaIframe
