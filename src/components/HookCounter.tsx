import React from 'react'
import { useState } from 'react';
import useCounter from '../hooks/useCounter';

const HookCounter = () => {

  const { count, accumulate } = useCounter(50)

    


  return (
    <div>
        <h4>HookCounter: <small>{count}</small></h4>
        
       <button onClick={() => accumulate(1)}>+</button>     
       <button onClick={() => accumulate(-1)}>-</button>
        
    </div>
  )
}

export default HookCounter