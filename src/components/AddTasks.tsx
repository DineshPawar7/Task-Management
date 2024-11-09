import React from 'react';
import { FaBriefcase, FaPlus } from 'react-icons/fa';
import { CiWarning } from 'react-icons/ci';
import { MdOutlineWatchLater } from "react-icons/md";

import '../styles/AddTasks.css';

const AddTasks: React.FC = () => {
  const cards = [
    { icon: <CiWarning />, description: 'Expired Token', number: 5, backgroundColor: '#F42D20' },
    { icon: <FaBriefcase />, description: 'All active tokens', number: 7, backgroundColor: '#E89271' },
    { icon: <MdOutlineWatchLater />, description: 'Completed Tasks', number: '2/7', backgroundColor: '#70A1E5' },
  ];

  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <div className="icon" style={{ backgroundColor: card.backgroundColor }}>
            {card.icon}
          </div>
          <p className="description">{card.description}</p>
          <p className="number">{card.number}</p>
        </div>
      ))}
      <button className="add-task-button">
        <FaPlus className="plus-icon" /> Add Task
      </button>
    </div>
  );
};

export default AddTasks;