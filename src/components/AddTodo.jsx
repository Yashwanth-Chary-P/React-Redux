import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim()) { // Prevent adding empty todos
            dispatch(addTodo(input));
            setInput('');
        }
    };

    return (
        <form onSubmit={addTodoHandler} className="flex items-center space-x-4 mt-8 p-4 bg-gray-900 rounded-lg shadow-xl">
            <input
                type="text"
                className="flex-grow bg-gray-700 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-all duration-200 ease-in-out placeholder-gray-400"
                placeholder="What's on your mind today?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded-md text-lg font-semibold shadow-lg transition-colors duration-200 transform hover:scale-105 active:scale-95"
            >
                Add Task
            </button>
        </form>
    );
}

export default AddTodo;