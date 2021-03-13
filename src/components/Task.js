import { FaTimes, FaBell } from 'react-icons/fa';
    
const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder': ''}` } onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.reminder ? (<FaBell />) : null}
                {task.text} <FaTimes onClick={() => onDelete(task.id)} style={{ color: 'red', cursor: 'Pointer' }} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
