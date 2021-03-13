import { useState } from 'react';

const AddTask = ({ onAddTask }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert('Please add as task');
            return;
        }

        onAddTask({ text, day, reminder });

        setText('');
        setDay('');
        setReminder(false);
    };

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="add-task">Task</label>
                <input type="text" name="add-task" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="day-and-time">Day & Time</label>
                <input type="text" name="day-and-time" placeholder="Add Day & Time"
                value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="set-reminder">Set Reminder</label>
                <input type="checkbox" name="set-reminder"
                value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type="submit" name="submit" value="Save Task" className="btn btn-block" />
        </form>
    )
}

export default AddTask
