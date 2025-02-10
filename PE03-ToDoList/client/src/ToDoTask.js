import React from 'react';

function ToDoTask({ task, onDelete }) {
    return (
        <div className="todo-task">
            <span>{task}</span>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default ToDoTask;