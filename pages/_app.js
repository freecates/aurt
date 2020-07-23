import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import Page from '../components/Page';

const App = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Page ruta={pageProps.pathname}>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  // this exposes the query to the user
  pageProps.pathname = ctx.pathname;
  pageProps.query = ctx.query;
  return { pageProps };
};
export default App;
