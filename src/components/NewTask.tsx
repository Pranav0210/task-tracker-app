import React, { useState } from 'react';
import DateInput from './DateInput.tsx';
import TimeInput from './TimeInput.tsx';
import '../styles/newTask.css';

interface NewTaskProps {
  onTaskCreate: (task: Task) => void;
}

interface Task {
  id:number;
  title: string;
  dueDate: Date;
  isComplete: boolean;
  description: string;
  dateAdded: Date;
}

const NewTask: React.FC<NewTaskProps> = ({ onTaskCreate }) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [dueTime, setDueTime] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateTask = () => {
    if (title.trim() === '' || !dueDate) {
      // Ensure that title is not empty and dueDate is selected
      return;
    }

    const newTask: Task = {
      id:Date.now(),
      title: title,
      isComplete: false,
      dueDate: dueDate as Date,
      description:description,
      dateAdded: new Date(),
    };

    // Call the callback function to notify parent component about the new task
    onTaskCreate(newTask);

    // Reset form fields after creating the task
    setTitle('');
    setDueDate(null);
    setDescription('');
  };

  return (
    <div className='form-container'>
      <h2 className='form-title'>Create New Task</h2>
      <div className='input-group'>
        <label htmlFor="title" className="label-text">Task Name</label>
        <input
          type="text"
          className="title-text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='input-group'>
        <label className="label-text" htmlFor="dueDate">Due</label>
        <DateInput onChange={setDueDate} value={dueDate} />
      </div>
      {/* <input
        type="datetime-local"
        id="dueDate"
        value={dueDate ? dueDate.toISOString().slice(0, 16) : ''}
        onChange={(e) => setDueDate(new Date(e.target.value))}
      /> */}
      <div className='input-group'>
        <label className="label-text" htmlFor="dueTime">Due Time:</label>
        <TimeInput onChange={setDueTime} value={dueTime} />
      </div>

      <div className='input-group'>
        <label className="label-text" htmlFor="description">Description</label>
        <textarea
          className="description-text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="btn" onClick={handleCreateTask}>Create Task</div>
    </div>
  );
};

export default NewTask;
