import Task from "./Task"


const Tasks = ({ tasks, onDelete, onToggle }) => {
    

    return (
        <>
            {tasks.map((task, index) => (
                <Task key={index} onDelete={onDelete} onToggle={onToggle} task={task}/>
            ))}
        </>
    )
}

export default Tasks
