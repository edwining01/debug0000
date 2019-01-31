
import React from 'react'
import { render } from 'react-dom'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from './store'
const rCtx = require.context("./src")
const App = rCtx("./App").default
const HotApp = hot(module)(App)
const WrapperBase = () => <Provider store={store}><HotApp /></Provider>
const Wrapper = WrapperBase

render(<Wrapper />, document.getElementById("app"))
