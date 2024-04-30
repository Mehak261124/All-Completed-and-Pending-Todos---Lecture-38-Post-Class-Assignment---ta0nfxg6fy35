import React, { useState } from 'react';

export default function Todo() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('All');

    const addTodo = () => {
        if (input.trim() !== '') {
            setTodos(prevTodos => [
                ...prevTodos,
                { id: Date.now(), text: input, isCompleted: false } // 1 jan 1970 se ab tak 
            ]);
            setInput('');
        }
    };

    const toggleTodo = (id) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            )
        );
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'All') return true;
        if (filter === 'Completed') return todo.isCompleted;
        if (filter === 'Pending') return !todo.isCompleted;
        return true;
    });

    return (
        <>
            <h1>Todo</h1>
            <div>
                <input 
                    type='text' 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <div>
                <button onClick={() => setFilter('All')}>All</button>
                <button onClick={() => setFilter('Completed')}>Completed</button>
                <button onClick={() => setFilter('Pending')}>Pending</button>
            </div>
            <ul>
                {filteredTodos.map(todo => (
                    <li
                        key={todo.id} // keys should be stable 
                        className={todo.isCompleted ? 'completed' : ''}
                        onClick={() => toggleTodo(todo.id)}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
        </>
    );
}

// for transitory data you have to do it 
// const toggleTodo = (index) => {
//   const newTodos = [...todos];
//   newTodos[index].isCompleted = !newTodos[index].isCompleted;
//   setTodos(newTodos);
// }

// const filterTodos = () => {
//   switch(filter){
//     case "completed":
//       return todos.filter((todo) => todo.isCompleted);
//     case "pending":
//       return todos.filter((todo) => !todo.isCompleted);
//     default:
//       return todos;
//   }
// }
// apply onclick on all the buttons all,pending,completed