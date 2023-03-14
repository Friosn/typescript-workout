import React from 'react'

const BasicTypes = () => {

    let name: string = 'Fran';
    let age: number | string = 29;

    const arms = 2; // No se puede reasignar el valor de una constante en Typescript
    const isActive = true; 

    const powers : string[] = ['Speed', 'Endurance']

  return (
    <>
        <h2>Basic Types</h2>
        {name}
        {age}
        {powers}
    </>
  )
}

export default BasicTypes