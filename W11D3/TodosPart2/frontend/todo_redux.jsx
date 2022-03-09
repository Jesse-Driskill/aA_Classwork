import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from './components/root';

import {receiveTodo, receiveTodos, removeTodo} from "./actions/todo_actions"
import {receiveSteps, receiveStep, removeStep} from "./actions/step_actions"

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content")
    const store = configureStore();
    ReactDOM.render(<Root store={store} />, content);
    
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo;
    window.receiveStep = receiveStep;
    window.receiveSteps = receiveSteps;
    window.removeStep = removeStep;
});