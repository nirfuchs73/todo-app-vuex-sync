// import HomePage from './pages/HomePage.js'
import TodoApp from './pages/TodoApp.js';
import TodoEdit from './pages/TodoEdit.js';
import TodoDetails from './pages/TodoDetails.js';

const routes = [
    // { path: '/', component: HomePage },
    { path: '/todo', component: TodoApp },
    { path: '/todo/edit/:todoId?', component: TodoEdit },
    { path: '/todo/:todoId', component: TodoDetails }
];

export default routes;