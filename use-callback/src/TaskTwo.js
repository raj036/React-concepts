import React, { useState, useCallback } from 'react';

const TaskTwo = () => {
    const [tasks, setTasks] = useState([
        { id: 1, name: 'React', completed: false },
        { id: 2, name: 'useCallback', completed: false },
    ]);
    const [filter, setFilter] = useState('All');
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks((prevTasks) => [
                ...prevTasks,
                { id: Date.now(), name: newTask, completed: false },
            ]);
            setNewTask('');
        }
        console.log("add");
    };

    const toggleTaskCompletion = useCallback((taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
        console.log("hello")
    }, []);

    const getFilteredTasks = useCallback(() => {
        switch (filter) {
            case 'Completed':
                return tasks.filter((task) => task.completed);
            case 'Pending':
                return tasks.filter((task) => !task.completed);
            default:
                return tasks;
        }

    }, [filter, tasks]);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Task Manager</h1>
            <div>
                <input
                    type="text"
                    placeholder="New Task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <button onClick={() => setFilter('All')}>All</button>
                <button onClick={() => setFilter('Completed')}>Completed</button>
                <button onClick={() => setFilter('Pending')}>Pending</button>
            </div>
            <ul style={{ marginTop: '20px', listStyleType: 'none', padding: 0 }}>
                {getFilteredTasks().map((task) => (
                    <li
                        key={task.id}
                        style={{
                            textDecoration: task.completed ? 'line-through' : 'none',
                            cursor: 'pointer',
                        }}
                        onClick={() => toggleTaskCompletion(task.id)}
                    >
                        {task.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskTwo;

//In this useCallback function returns the moimoized function
// We use useCallback hook if we have many functions in our react application then if we work on any one function then the react has a by default behaviour that it will render the whole components but if we dont want to render some of the functions then we use useCallback
// and we can use dependencies in useCallback so when that particular function will get called at that time only that usecallback function will get re render 

