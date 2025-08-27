import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';
import { FaTrashAlt } from 'react-icons/fa'; // Assuming you have react-icons installed

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <>
            <div className="text-3xl text-white font-extrabold mb-8 mt-12 text-center tracking-wide">
                My Task List 📝
            </div>
            {todos.length === 0 ? (
                <p className="text-gray-400 text-center text-lg mt-6">
                    No tasks yet! Add some above.
                </p>
            ) : (
                <ul className="space-y-4 max-w-2xl mx-auto">
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="flex items-center justify-between bg-gray-800 rounded-lg p-4 shadow-lg border border-gray-700 transition-all duration-200 hover:shadow-2xl hover:border-blue-500"
                        >
                            <span className="flex-grow text-gray-200 text-xl mr-4 break-words">
                                {todo.text}
                            </span>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-gray-400 hover:text-red-500 bg-transparent border-0 p-2 rounded-full focus:outline-none transition-colors duration-200 transform hover:scale-110 active:scale-90"
                            >
                                <FaTrashAlt className="text-lg" /> {/* Using an icon for better UX */}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default Todos;