import {createContext, useState, useEffect} from 'react'
import {tasks as data} from '../data/task'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(data)
    },[])

    function createTask(task){
        if (task.description == ""){
        task.description = "Nueva tarea"
        }
        setTasks([...tasks, {
        title: task.title,
        id: tasks.length,
        description: task.description
        }])
    }

    function deleteTask(taskId){
        setTasks(tasks.filter(task => task.id !== taskId))
    }
    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}