
// constants 
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';


// data 
let data = [
	{id:1, header:"first header", body: "first body"},
	{id:2, header:"second header", body:"second body"},
	{id:3, header:"third header", body:"second body"},
	{id:4, header:"fourth header", body:"second body"},
	{id:5, header:"fifth header", body:"second body"},
];


// initialize server
const express = require('express'); 
const app = express(); 
const morgan = require('morgan')
const cors = require('cors')


// configure server
app.use(express.json());
app.use(morgan('tiny'))
app.use(cors())

// define routes 
app.get('/todo', getAllTodoItems);
app.get('/todo/:id', getTodoItemById);
app.post('/todo', createTodoItem);
app.put('/todo', updateTodoItem);
app.delete('/todo/:id', delteTodoItem)

// start server
app.listen(3000, ()=>{console.log('server starts ...')})




// route handler
function getAllTodoItems(req, res){
	res.json(data)
}

function getTodoItemById(req, res){
	const id = +req.params.id;
	res.json(data.filter(el => el.id === id));
}

function createTodoItem(req, res){
	const newTodoItem = req.body;
	newTodoItem.id = data.length + 1;
	data.push(newTodoItem);
	res.json()
}

function updateTodoItem(req, res){
	const toBeUpdatedItem = req.body; 
	data = data.filter(el => el.id !== +toBeUpdatedItem.id);
	data.push(req.body)
	res.json()
}

function delteTodoItem(req, res){
	const id = +req.params.id;
	data = data.filter(el.id !== id);
	res.json()
}