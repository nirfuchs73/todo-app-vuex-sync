import TodoList from '../cmps/TodoList.js';

export default {
    name: 'TodoApp',
    template: `
        <section class="todo-app todo-wrapper">
            <h1>Todo App</h1>
            <todo-list v-bind:todos="todoItems" v-on:delete="deleteTodo" v-on:edit="editTodo"></todo-list>
            <button v-on:click="addTodo">Add Todo</button>
        </section>
    `,
    computed: {
        todoItems() {
            return this.$store.state.todoItems;
        }
    },
    methods: {
        // addToCart(item) {
        //     this.$store.commit('addToCart', item)
        // }
        deleteTodo(itemId) {
            console.log('deleteTodo');
            this.$store.commit('removeItem', itemId);
        },
        editTodo() {
            console.log('editTodo');
        },
        addTodo() {
            console.log('addTodo');
            var txt = prompt('Todo:');
            var importance = prompt('Importance:');
            this.$store.commit('addItem', txt, importance);
        }
    },
    components: {
        TodoList,
        // bookDetails,
        // bookFilter,
        // bookAdd
    }
}