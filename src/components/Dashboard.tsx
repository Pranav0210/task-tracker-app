// Dashboard.tsx
import React, { useEffect, useState, DragEvent } from 'react';
import { Link } from 'react-router-dom';
import '../styles/dashboard.css';
import NewTask from './NewTask.tsx';
import TimeInput from './TimeInput.tsx';
import TaskCard from './TaskCard.tsx';
// import TaskData from '../tasks.ts';

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  dateAdded: Date;
  // dueTime: string;
  isComplete: boolean;
}

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([{
    id: 1,
    title: 'Complete feature integration for task management',
    description: 'Integrate new features into the task management system for enhanced functionality.',
    isComplete: false,
    dueDate: new Date('2024-02-12'),
    dateAdded: new Date('2024-01-28T12:34:56.789Z'),
  },
  {
    id: 2,
    title: 'Prepare agenda for team meeting',
    description: 'Create an agenda outlining key topics and updates for the upcoming team meeting.',
    isComplete: true,
    dueDate: new Date('2024-02-15'),
    dateAdded: new Date('2024-01-28T12:34:56.789Z'),
  },
  {
    id: 3,
    title: 'Add new tasks to appear below these sample tasks',
    description: 'You can mark the task as completed by clicking on the clock icon and similarly unmarked by clicking on the check icon. Delete the task by clicking on the trash icon.',
    isComplete: false,
    dueDate: new Date('2024-02-18'),
    dateAdded: new Date('2024-01-28T12:34:56.789Z'),
  }]);
  const [filterComplete, setFilterComplete] = useState<boolean | null>(null);
  const [filterDate, setFilterDate] = useState<string>('');

  useEffect(() => {
    // Load tasks from LocalStorage on component mount
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    // Save tasks to LocalStorage whenever tasks change
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskCreate = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const handleTaskDelete = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleTaskCompleteToggle = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks
    .filter((task) =>
      filterComplete === null ? true : task.isComplete === filterComplete
    )
    .filter((task) =>
      filterDate ? task.dueDate.toISOString().slice(0, 10) === filterDate : true
    );

  return (
    <div className="dashboard">
      <div className='left-container'>
        <div className='header-wrapper'>
          <div className='header-title'>{`Task Tracker App`}</div>
          <div className='header-container'>
            <div className="filter-options">
              <label>
                Show:
                <select
                  value={filterComplete === null ? 'all' : filterComplete.toString()}
                  onChange={(e) =>
                    setFilterComplete(e.target.value === 'all' ? null : e.target.value === 'true')
                  }
                >
                  <option value="all">All</option>
                  <option value="true">Complete</option>
                  <option value="false">Incomplete</option>
                </select>
              </label>
              <label>
                Date:
                <input
                  type="date"
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>

        <div className='list-shape-wrapper'>
          <div className='list-wrapper'>
            <div className="task-list">
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                {...task}
                onCompleteToggle={handleTaskCompleteToggle}
                onTaskDelete={handleTaskDelete}
              />
            ))}
            </div>
          </div>
        </div>
      </div>
      <NewTask onTaskCreate={handleTaskCreate}/>
            
      {/* <Link to="/new-task">
        <div className="add-task-button">+</div>
      </Link> */}

      {/* <NewTask onTaskCreate={handleTaskCreate} /> */}
    </div>
  );
};

export default Dashboard;
