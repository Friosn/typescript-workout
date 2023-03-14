import React from 'react'
import { useState } from 'react';
import { useForms } from '../hooks/useForms';


const FormTS = () => {
    
    const { formT, onChange } = useForms()


  return (
    <>
        <h3>Forms</h3>
        <input type="text" placeholder='Email' value={formT.email} onChange={(ev) => onChange(ev.target.value, 'email')}/> {/* También podría destructurar el target del evento ({target}) y ahorrar el ev.target.value -> target.value */}
        <input type="text" placeholder='Password' value={formT.password} onChange={(ev) => onChange(ev.target.value, 'password')} />{/* Tanto en 'email' como en 'password', hay vulnerabilidades, tengo que ver como proteger ese campo */}
        <code>
            <pre>{JSON.stringify(formT, null, 2)}</pre>
        </code>
    </>
  )
}

export default FormTS