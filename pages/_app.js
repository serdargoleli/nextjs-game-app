import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/layouts/Layout";
import store from "../store/index";

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
