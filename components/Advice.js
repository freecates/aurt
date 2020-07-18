const Advice = () => (
  <div className='container'>
    <div className='advice'>
      <h1>ES: JULIO y AGOSTO abierto jueves, viernes y sábados noche</h1>
    </div>
    <style jsx>{`
      .container {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #ffffff;
        z-index: 4000;
      }

      .advice {
        width: 100%;
        height: 100vh;
      }
    `}</style>
  </div>
);

export default Advice;
