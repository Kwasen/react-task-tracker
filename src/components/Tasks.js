import Task from "./Task"


const Tasks = ({ tasks, onDelete, onToggle }) => {
    

    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} onDelete={onDelete} onToggle={onToggle} task={task}/>
            ))}
        </>
    )
}

export default Tasks
