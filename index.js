
import React from 'react'
import { render } from 'react-dom'
import { hot } from 'react-hot-loader'

const rCtx = require.context("./src")
const App = rCtx("./App").default

const WrapperBase = () => <div><App /></div>
const Wrapper = hot(module)(WrapperBase)

render(<Wrapper />, document.getElementById("app"))
