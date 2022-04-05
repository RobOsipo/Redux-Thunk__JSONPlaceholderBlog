import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import App from './components/App.js'
import reducers from './reducers/index.js'

const store = createStore(reducers, applyMiddleware(thunk))

// store.subscribe(() => {
//     console.log(store.getState())
// })

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render( 
<React.StrictMode>
  <Provider store={store}>
      <App />
  </Provider>
</React.StrictMode>);