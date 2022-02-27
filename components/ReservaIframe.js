import React from 'react';
import Iframe from 'react-iframe'

const ReservaIframe = props => (
  <React.Fragment>
    {props.ruta.includes('/ca') && (
      <Iframe
        url={props.url}
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
        url={props.url}
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
          url={props.url}
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
