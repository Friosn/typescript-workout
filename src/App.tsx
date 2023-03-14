import React from 'react'
import BasicTypes from './typescript/BasicTypes'
import ObjectLiterals from './typescript/ObjectLiterals'
import FuncionsTS from './typescript/FuncionsTS'

import HookCounter from './components/HookCounter'
import Login from './components/Login'

const App = () => {
  return (
    <div>
      <Login/>
      <h1>Introduction to Typescript with React</h1>
      <hr/>
      <h4>{<BasicTypes/>}</h4>
      
      <hr/>
      <h4>{<ObjectLiterals/>}</h4>
      <hr/>
      <h4>{<FuncionsTS/>}</h4>
    
      <hr/>
      <h4>{<HookCounter/>}</h4>

    </div>
  )
}

export default App
