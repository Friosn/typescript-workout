import React from 'react'

const FuncionsTS = () => {

const sum = (a:number, b:number):number => {

    return a + b;

}

  return (
    <>
        <h4>
        Funcions' results: {sum(4, 4)}

        </h4>
   </>
  )
}

export default FuncionsTS