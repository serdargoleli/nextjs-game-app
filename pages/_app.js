import { Provider } from "react-redux";
import Layout from "@/layouts/Layout";
import store from "../store/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles/index.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>S'GAME FREE GAME PLAY TO</title>
        <meta name="author" content="Serdar Göleli" />
        <meta name="description" content="Free games to play on PC and Browsers" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
