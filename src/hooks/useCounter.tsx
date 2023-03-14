import React from 'react'
import { useState } from 'react';

const useCounter = (initial: number = 10) => {

    const [count, setCount] = useState<number>(initial)

    const accumulate = (num: number) => {
        setCount(count + num)
    }


  return {
    count,
    accumulate
  }
}

export default useCounter