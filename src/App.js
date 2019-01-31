
import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { getValue, setValue } from '../store'
const AppBase = () => <div>
  <div>Edit me and see if it works?</div>
  <input value={getValue()} onChange={(ev) => setValue(ev.target.value)}/>
</div>
export default connect((state) => state.value)(AppBase)
