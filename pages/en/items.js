import Items, {
  ALL_POSTS_QUERY
} from '../../components/Items'
import { initializeApollo } from '../../lib/apolloClient'

const Blog = props => (
  <div>
    <Items ruta={props.pathname} />
  </div>
)

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 1,
  }
}

export default Blog
