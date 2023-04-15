import React, { FormEvent, useRef, useState } from 'react'

export default function Form() {

    const [person,setPerson] = useState({
        name:'',
        age:0
    });

    function handleSubmit(event:FormEvent) {
        event.preventDefault()
        console.log(person)
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name">name</label>
            <input value={person.name} onChange={e=>setPerson({...person,name:e.target.value})} type="text" name="name" id="name" />
        </div>
        <div className="mb-3">
            <label htmlFor="age" className='form-label'>Age</label>
            <input value={person.age} onChange={e=>setPerson({...person,age:+e.target.value})} type="text" name="age" id="age" />
        </div>
        <button type="submit">submit</button>
    </form>
  )
}
