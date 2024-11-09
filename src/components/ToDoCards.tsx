import React from 'react'; 
import '../styles/ToDoCards.css';
interface ToDoCardProps {
  title: string;
  description: string;
  deadline: string;
  priority: string;
}

const ToDoCard: React.FC<ToDoCardProps> = ({ title, description, deadline, priority }) => {
  return (
    <div className="todo-card">
      <span className="priority">{priority}</span>
      <div className="dots">⋮</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <p className="card-deadline">Deadline: {deadline}</p>
    </div>
  );
};

const ToDo: React.FC = () => {
  const cards = [
    { title: 'Brainstorming', description: 'Brainstorming brings team members, diverse experience into play. ', deadline: 'Deadline: 12/5/24', priority: 'Low'},
    { title: 'Research', description: 'User research helps you to create an optimal product for users.', deadline: 'Deadline: 12/5/24', priority: 'High' },
    { title: 'Wireframes', description: 'Low fidelity wireframes include the most basic content and visuals.', deadline: 'Deadline: 12/5/24', priority: 'High' },
  ];
  

  return (
    <div className="todo-container">
       <div className="header">
        
      <h1 className="heading">To-Do</h1>
      <div className="counter">{cards.length}</div>
      </div>
      <hr className="separator" />
      <div className="cards">
        {cards.map((card, index) => (
          <ToDoCard
            key={index}
            title={card.title}
            description={card.description}
            deadline={card.deadline}
            priority={card.priority}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDo;