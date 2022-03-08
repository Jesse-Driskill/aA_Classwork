import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store"
import {receiveTodo, receiveTodos, removeTodo} from "./actions/todo_actions"

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content")
    ReactDOM.render(<h1>ToDos App</h1>, content);

    window.store = configureStore();
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo;
});