import TodoList from '../cmps/TodoList.js';
import TodoFilter from '../cmps/TodoFilter.js';

export default {
    name: 'TodoApp',
    template: `
        <section class="todo-app todo-wrapper">
            <h1>Todo App</h1>
            <todo-filter class="todo-app-header-item"></todo-filter>
            <todo-list v-bind:todos="todoItems" v-on:delete="deleteTodo" v-on:edit="editTodo" v-on:done="doneTodo"></todo-list>
            <button v-on:click="addTodo">Add Todo</button>
        </section>
    `,
    data() {
        return {

        }
    },
    computed: {
        todoItems() {
            return this.$store.getters.filterTodoItems;
        },
    },
    methods: {
        deleteTodo(itemId) {
            console.log('deleteTodo');
            this.$store.commit('removeItem', itemId);
        },
        editTodo(itemId) {
            console.log('editTodo');
            this.$router.push('/todo/edit/' + itemId);
        },
        addTodo() {
            console.log('addTodo');
            var txt = prompt('Todo:');
            var importance = +prompt('Importance:');
            this.$store.commit('addItem', { txt: txt, importance: importance });
        },
        doneTodo(itemId) {
            console.log('doneTodo');
            this.$store.commit('setCurrItem', itemId);
            this.$store.commit('toggleCurrItemDone');
        },
    },
    components: {
        TodoList,
        TodoFilter,
    }
}