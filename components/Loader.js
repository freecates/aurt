const Loader = () => (
  <div className='container'>
    <div className='loader'>
      <div className='advice'>
        <h1>
          <span>CA</span> JULIOL i AGOST obert djious, divendres i dissabtes nit
        </h1>
        <h1>
          <span>ES</span> JULIO y AGOSTO abierto jueves, viernes y sábados noche
        </h1>
        <h1>
          <span>EN</span> JULY & AUGUST open Thursday, Friday and Saturday night
        </h1>
      </div>
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
        width: 100%;
        height: 100vh;
      }

      .loader {
        width: 100%;
        height: 100vh;

        background: #ffffff url(/static/aurt-restaurant-loading-small-white.gif)
          no-repeat center center;
      }

      .advice {
        margin: 25vh auto 0 auto;
        width: 100%;
        text-align: center;
      }
      h1 {
        font-size: 1.5rem;
      }
      span {
        color: #ffffff;
        background: #564b45;
        border-radius: 50%;
        font-size: 1rem;
        padding: 1rem 0.75rem;
      }
      @media screen and (min-width: 768px) {
        .advice {
          max-width: 50%;
        }
        h1 {
          line-height: 4.5rem;
          font-size: 3.5rem;
        }
        span {
          font-size: 2rem;
        }
      }
    `}</style>
  </div>
);

export default Loader;
