import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import withApolloClient from '../lib/withApolloClient'
import dynamic from 'next/dynamic'

const DynamicComponentWithCustomLoading = dynamic(
  () => import('../components/Page'),
  {
    loading: () => <p style={{ textAlign: 'center' }}>...</p>
  }
)

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    // this exposes the query to the user
    pageProps.pathname = ctx.pathname
    pageProps.query = ctx.query
    return { pageProps }
  }

  render() {
    const { Component, apolloClient, pageProps } = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <DynamicComponentWithCustomLoading ruta={pageProps.pathname}>
            <Component {...pageProps} />
          </DynamicComponentWithCustomLoading>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
