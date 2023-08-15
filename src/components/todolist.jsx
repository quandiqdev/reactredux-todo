import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../redux/actions";

export default function ToDoList() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    const [newTodoText, setNewTodoText] = useState("");
    const handleAddTodo = () => {
        if (newTodoText.trim() !== "") {
            dispatch(addTodo(newTodoText));
            setNewTodoText("");
        }
    }
    return (
        <div className="todolist">
            <div className="container">
                <div className="todolist__wrapper">
                    <div className="todolist__title">
                        To Do App
                    </div>
                    <div className="todolist__subtitle">
                    This is a simple pet project where I've used Redux for practice.

                    </div>
                    <div className="todolist__area">
                        <input
                            type="text"
                            value={newTodoText}
                            onChange={(e) => setNewTodoText(e.target.value)}
                            placeholder="Add a new task"
                        />
                        <button onClick={handleAddTodo}>Add task</button>
                    </div>
                    <ul className="todolist__list">
                        {todos.map((todo, index) => (
                            <li key={index}>{todo.text}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}