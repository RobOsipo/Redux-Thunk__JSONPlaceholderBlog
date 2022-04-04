import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import App from './components/App.js'
import reducers from './reducers/index.js'


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render( 
<React.StrictMode>
  <Provider store={createStore(reducers)}>
      <App />
  </Provider>
</React.StrictMode>);