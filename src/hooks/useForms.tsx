import React from 'react'
import { useState } from 'react';

export const useForms = () => {


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

  return { onChange, formT}
}

