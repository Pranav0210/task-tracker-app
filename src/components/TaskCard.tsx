import React from "react";
import PropTypes from 'prop-types';
import "../styles/card.css";

interface TaskCardProps{
    id:number;
    title:string;
    description:string;
    isComplete:boolean;
    dueDate:Date;
    dateAdded:Date;
    onTaskDelete: (taskId: number) => void;
    onCompleteToggle: (taskId: number) => void;
}
interface DetailsComponentProps{
    title:string;
    description:string;
}

const TaskCard: React.FC<TaskCardProps> = ({id, title, description, isComplete, dateAdded, dueDate, onTaskDelete, onCompleteToggle}) =>{
    const handleComplete = (event)=>{
        onCompleteToggle(id);
    }
    const handleDelete = (event)=>{
        onTaskDelete(id);
    }
    return(
        <div className={`task-container`}>
            <div className={`${isComplete ? 'completed' : 'task-card '}`}>
                <div className="check-icon" onClick={handleComplete}>{isComplete ? <CheckIcon /> : <ClockIcon />}</div>
                <DetailsComponent title={title} description={description}/>
            </div>
            <div className="trash-icon" onClick={handleDelete}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            </div>
            <div className="due-time">{`${dateAdded}`}</div>
        </div>
    )
}
const CheckIcon: React.FC = () => (
    <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const ClockIcon: React.FC = () => (
    <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
    </svg>
);
const DetailsComponent:React.FC<DetailsComponentProps> = ({title,description})=>{
    return(
        <div className="task-details">
            <div className="task-title">{title}</div>
            <div className="task-description">{description}</div>
        </div>
    )
}

TaskCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    dateAdded: PropTypes.instanceOf(Date).isRequired,
    isComplete:PropTypes.bool.isRequired,
    onTaskDelete: PropTypes.func.isRequired,
}
export default TaskCard;