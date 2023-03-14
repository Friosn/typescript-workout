import React from 'react'
interface Person {
    fullName: string;
    age: number;
    direction: Direction
}
interface Direction {
    country: string;
    city: string;
    street: string;
}

const ObjectLiterals = () => {

    const person: Person = { //Esta sería la estructura inalterable de este objeto, y no se pueden añadir keys ni na de na

        fullName: 'Fran',
        age: 29,
        direction: {
            country: 'Spain',
            city: 'Matrid',
            street:'Argumosa Street',
    }
}


  return (
    <>
     <code>
        <pre>
            {JSON.stringify(person)}
        </pre>
     </code>
    </>
  )
}

export default ObjectLiterals;