import { Provider } from "react-redux";
import Layout from "@/layouts/Layout";
import store from "../store/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles/index.css";

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
