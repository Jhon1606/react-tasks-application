import React, {useState} from 'react'
import {tasks as data} from './task'

function TaskForm() {

    const [title, setTitle] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title)
    }
  return (
    <form onSubmit={handleSubmit}>
        <input placeholder="Escribe tu tarea" 
        onChange={(e) => {setTitle(e.target.value)}}/>
        <button>Guardar</button>
    </form>
  )
}

export default TaskForm