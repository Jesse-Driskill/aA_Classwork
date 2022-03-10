import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from './components/root';
import {allTodos, stepsByTodoId} from './reducers/selectors';
import {receiveTodo, receiveTodos, removeTodo} from "./actions/todo_actions"
import {receiveSteps, receiveStep, removeStep} from "./actions/step_actions"
import fetchTodos from "./util/todo_api_util"

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("root")
    const store = configureStore();
    ReactDOM.render(<Root store={store} />, content);
    
    window.fetchTodos = fetchTodos;
    window.allTodos = allTodos;
    window.stepsByTodoId = stepsByTodoId;
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo;
    window.receiveStep = receiveStep;
    window.receiveSteps = receiveSteps;
    window.removeStep = removeStep;
});