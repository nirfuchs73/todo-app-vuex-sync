export default {
    loadFromStorage,
    saveToStorage

}

function saveToStorage(key, val) {
    localStorage[key] = JSON.stringify(val);
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return (val) ? JSON.parse(val) : null;
}
