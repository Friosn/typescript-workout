import React from 'react'
import { useState } from 'react';

const FormTS = () => {

    const [formT, setFormT] = useState({
        email:"test@test.com",
        password: "password123"
    })

    const onChange = (value: string, field: string) => {
        setFormT({
            ...formT,
            [field]: value
        })
    }
  return (
    <>
        <h3>Forms</h3>
        <input type="text" placeholder='Email' value={formT.email} onChange={(ev) => onChange(ev.target.value, 'email')}/> {/* También podría destructurar el target del evento ({target}) y ahorrar el ev.target.value -> target.value */}
        <input type="text" placeholder='Password' value={formT.password} onChange={(ev) => onChange(ev.target.value, 'password')} />
        <code>
            <pre>{JSON.stringify(formT, null, 2)}</pre>
        </code>
    </>
  )
}

export default FormTS