import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import Home from './layouts/Home';
import { Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";
// import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { gql } from '@apollo/client';
// import { ApolloProvider } from '@apollo/client';

const hist = createBrowserHistory();


// const client = new ApolloClient({
//   uri: 'https://48p1r2roz4.sse.codesandbox.io',
//   cache: new InMemoryCache()
// });

// client
//   .query({
//     query: gql`
//       query GetRates {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

ReactDOM.render(
  <Router history={hist}>
    {/* <ApolloProvider client={client}> */}
      <div>
        {/* <h2>My first Apollo app 🚀</h2> */}
        <Home/>
      </div>
    {/* </ApolloProvider> */}
      
    </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
