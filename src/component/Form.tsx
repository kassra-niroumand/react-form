import React, { FormEvent, useRef } from 'react'

export default function Form() {

    const nameRef = useRef<HTMLInputElement>(null)
    const ageRef = useRef<HTMLInputElement>(null)

    function handleSubmit(event:FormEvent) {
        event.preventDefault()
        if (nameRef.current != null) {
            console.log(nameRef.current.value);            
        } 
        if (ageRef.current != null) {
            console.log(parseInt(ageRef.current.value));
            
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name">name</label>
            <input ref={nameRef} type="text" name="name" id="name" />
        </div>
        <div className="mb-3">
            <label htmlFor="age" className='form-label'>Age</label>
            <input ref={ageRef} type="text" name="age" id="age" />
        </div>
        <button type="submit">submit</button>
    </form>
  )
}
