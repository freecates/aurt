import BannerHome from '@components/BannerHome';
import Reservations from '../../components/Reservations'

const Reserva = props => (
  <div>
    <Reservations ruta={props.pathname} url={props.url} />
    <BannerHome pathname={props.pathname} active />
  </div>
)

export async function getStaticProps() {
  const url = 'https://www.covermanager.com/reserve/module_restaurant/restaurante-aurtx/english';

  return {
    props: { url }, // will be passed to the page component as props
  };
}

export default Reserva
