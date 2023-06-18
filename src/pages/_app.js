import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import store from "@/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { SessionProvider } from "next-auth/react";

let persistor = persistStore(store);

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer />
          </Layout>
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
