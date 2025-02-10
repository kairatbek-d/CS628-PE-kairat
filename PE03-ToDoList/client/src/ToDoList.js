import React, { useState, useRef, useEffect } from 'react';
import ToDoTask from './ToDoTask';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (savedTasks) {
            setTasks(savedTasks);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = () => {
        const newTask = inputRef.current.value.trim();
        if (newTask !== '') {
            setTasks([...tasks, newTask]);
            inputRef.current.value = '';
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="todo-list">
            <h1>ToDo List App</h1>
            <div className="add-task">
                <input
                    type="text"
                    ref={inputRef}
                    placeholder="Enter task description"
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <div className="tasks-container">
                {tasks.map((task, index) => (
                    <ToDoTask 
                        key={index} 
                        task={task} 
                        onDelete={() => handleDeleteTask(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ToDoList;