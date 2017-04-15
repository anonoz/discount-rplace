import React from 'react'
import ReactDOM from 'react-dom'
// import {Route, Router, hashHistory} from 'react-router'
// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
// import io from 'socket.io-client'
// import reducer from './reducer'
// import {setState} from './action_creators'
import { PlaceCanvas } from './components/PlaceCanvas'

var bitmap = require('./bitmap.json')['bitmap']
// var bitmap = "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"

ReactDOM.render(
  <PlaceCanvas bitmap={bitmap} />,
  document.getElementById('app')
)
