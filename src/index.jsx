// JS imports
import React from 'react'
import ReactDOM from 'react-dom'
// import {Route, Router, hashHistory} from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
// import io from 'socket.io-client'
import reducer from './reducer'
import {setBitmap} from './action_creators'
import { PlaceCanvasContainer } from './components/PlaceCanvas'

// CSS imports
require('./index.scss')

// JSON imports
var bitmap = require('./bitmap.json')['bitmap']

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
store.dispatch(setBitmap(bitmap))

ReactDOM.render(
  <Provider store={store}>
    <PlaceCanvasContainer bitmap={bitmap} />
  </Provider>,
  document.getElementById('app')
)
