import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from 'react-router-dom'
import { ChainId,ThirdwebAuthProvider,ThirdwebProvider } from "@thirdweb-dev/react";
import  App  from "./App";
import './index.css';
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebAuthProvider desiredChainId={ChainId.Sepolia}>
    <Router>
      <App/>
    </Router>

  </ThirdwebAuthProvider>
)