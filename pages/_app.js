import "../styles/globals.css";

import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

function getLibrary() {
  const library = new Web3(web3.currentProvider);
  library.pollingInterval = 8000;
  // web3.currentProvider
  // new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/6e0cd2de9bd344a793dce96892e5a6e5")
  return library;
}

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}

export default MyApp;
