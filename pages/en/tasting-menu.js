import MenuPdf from '../../components/MenuPdf'

const TastingMenu = props => (
  <div>
    <MenuPdf ruta={props.pathname} file={ props.file } />
  </div>
)

export async function getStaticProps() {
  const file = 'https://wp.aurtrestaurant.com/wp-content/uploads/menus-aurt/menu-aurt-en.pdf';

  return {
    props: { file }, // will be passed to the page component as props
  };
}

export default TastingMenu
