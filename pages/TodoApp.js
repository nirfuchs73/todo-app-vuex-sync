import TodoList from '../cmps/TodoList.js';

export default {
    name: 'TodoApp',
    template: `
        <section class="todo-app todo-wrapper">
            <h1>TodoApp</h1>
            <todo-list v-bind:todos="todoItems" v-on:delete="deleteTodo" v-on:edit="editTodo"></todo-list>
            <button>Add Todo</button>
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
        }
    },
    components: {
        TodoList,
        // bookDetails,
        // bookFilter,
        // bookAdd
    }
}