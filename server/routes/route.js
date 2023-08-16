import express from 'express';
import { addTodo, getAllTodos } from '../controller/todo-controller.js';

const route = express.Router();

route.post('/todos', addTodo);
route.get('/todos', getAllTodos);

export default route;