import MenuPdf from '../../components/MenuPdf'

const MenuDegustacio = props => (
  <div>
    <MenuPdf ruta={props.pathname} file={ props.file } />
  </div>
)

export async function getStaticProps() {
  const file = 'https://wp.aurtrestaurant.com/wp-content/uploads/menus-aurt/menu-aurt-ca.pdf';

  return {
    props: { file }, // will be passed to the page component as props
  };
}

export default MenuDegustacio
