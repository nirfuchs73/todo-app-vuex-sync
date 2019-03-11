import UtilService from './UtilService.js';
import StorageService from './StorageService.js';
const TODOS_KEY = 'todos';


export default {
    query,
    getItemById,
    removeItem,
    addItem
}

function query() {
    return _createItems();
}

function _createItems() {
    var items = StorageService.loadFromStorage(TODOS_KEY);
    if (!items || items.length === 0) {
        items = [
            _createItem('Eat that thing', 3),
            _createItem('Learn how to code', 3),
            _createItem('Do the Ex', 3),
            _createItem('Do the Ex1', 2)
        ];

        StorageService.saveToStorage(TODOS_KEY, items);
    }
    return items;
}

function _createItem(txt, importance) {
    return {
        _id: UtilService.makeId(),
        txt: txt,
        isDone: false,
        createdAt: Date.now(),
        importance: importance
    }
}

function getItemById(items, itemId) {
    var item = items.find(item => itemId === item._id);
    return item;
}

function removeItem(items, itemId) {
    const idx = items.findIndex(item => item._id === itemId);
    items.splice(idx, 1);
    StorageService.saveToStorage(TODOS_KEY, items);
}

function addItem(items, txt, importance) {
    items.push(_createItem(txt, importance));
    StorageService.saveToStorage(TODOS_KEY, items);
}