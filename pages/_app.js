// import '../styles/globals.css'
// import type { AppProps } from 'next/app'
import { ApolloProvider } from "@apollo/client";
import client from '../libs/apollo';

function App({ Component, pageProps}) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

export default App;