import "@/styles/global.scss";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ApolloProvider client={client}>
        <Header />
        <Component {...pageProps} />
      </ApolloProvider>
    </div>
  );
}

// Disabling SSR
export default dynamic(() => Promise.resolve(App), { ssr: false });
