import UtilService from './UtilService.js';
import StorageService from './StorageService.js';
const TODOS_KEY = 'todos';


export default {
    query,
    getItemById,
    removeItem,
    addItem,
    updateItem,
    toggleDone,
    getEmpty
}
var todos = [];

// function query() {
//     return _createItems();
// }

function query() {
    var api = `http://localhost:3000/todos`;
    return axios.get(api)
        .then(res => res.data)
        .then(loadedTodos => {
            todos = loadedTodos;
            // console.log(todos);
            return todos;
        });
}

// function _createItems() {
//     var items = StorageService.loadFromStorage(TODOS_KEY);
//     if (!items || items.length === 0) {
//         items = [
//             _createItem('Eat that thing', 3),
//             _createItem('Learn how to code', 3),
//             _createItem('Do the Ex', 3),
//             _createItem('Do the Ex1', 2)
//         ];

//         StorageService.saveToStorage(TODOS_KEY, items);
//     }
//     return items;
// }

function _createItem(txt, importance) {
    return {
        id: UtilService.makeId(),
        txt: txt,
        isDone: false,
        createdAt: Date.now(),
        importance: importance
    }
}

// function getItemById(items, itemId) {
//     var item = items.find(item => itemId === item.id);
//     return item;
// }

function getItemById(todoId) {
    // console.log(todoId);
    var api = `http://localhost:3000/todos/${todoId}`;
    return axios.get(api)
        .then(res => {
            // console.log(res.data);
            return res.data;
        });
}

// function removeItem(items, itemId) {
//     const idx = items.findIndex(item => item.id === itemId);
//     items.splice(idx, 1);
//     StorageService.saveToStorage(TODOS_KEY, items);
// }

function removeItem(itemId) {
    var api = `http://localhost:3000/todos/${itemId}`;
    return axios.delete(api)
        .then(res => res.data);
}

// function addItem(items, item) {
//     items.push(_createItem(item.txt, item.importance));
//     StorageService.saveToStorage(TODOS_KEY, items);
// }

function addItem(item) {
    var api = `http://localhost:3000/todos`;
    return axios.post(api, item)
        .then(res => res.data)
        .then(addedTodo => {
            // console.log(addedBug);
            // bugs.push(addedTodo);
            return addedTodo;
        });
}

// function updateItem(items, item) {
//     const Idx = items.findIndex(currItem => currItem.id === item.id);
//     items.splice(Idx, 1, item);
//     StorageService.saveToStorage(TODOS_KEY, items);
// }

function updateItem(item) {
    console.log(item.id);
    var api = `http://localhost:3000/todos/${item.id}`;
    return axios.put(api, item)
        .then(res => res.data)
        .then(updatedTodo => {
            // TODO: bugs.findIndex, and replcae the bug
            // var bugIdx = bugs.findIndex(updatedBug => currBug.id === bug.id);
            // bugs.splice(bugIdx, 1, bug);
            return updatedTodo;
        });
}

function toggleDone(items, item) {
    item.isDone = !item.isDone;
    StorageService.saveToStorage(TODOS_KEY, items);
}

function getEmpty() {
    return {
        id: UtilService.makeId(),
        txt: '',
        isDone: false,
        createdAt: Date.now(),
        importance: ''
    }
}