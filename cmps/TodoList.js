// import UserMsg from './UserMsg.js'
// import ShoppingCart from './ShoppingCart.js'
import TodoPreview from './TodoPreview.js';

export default {
    name: 'TodoList',
    props: ['todos'],
    template: `
        <!-- <ul class="todo-list">
            <li v-for="todo in todos">
                <h3>{{todo.txt}} {{todo.importance}}</h3>
            </li>
        </ul> -->
        <section class="todo-list flex">
            <router-link class="todo-list-row flex" v-for="(currTodo, idx) in todos" :key="currTodo._id" :to="'/todo/' + currTodo._id">
                <todo-preview class="todo-list-preview" v-bind:todo="currTodo"></todo-preview>
                    <div class="todo-list-buttons flex">
                        <button v-on:click.stop.prevent="deleteTodo(currTodo)">Delete</button>
                        <button v-on:click.stop.prevent="editTodo(currTodo)">Edit</button>
                    </div>
            </router-link>
        </section>
    `,
    created() {

    },
    data() {
        return {

        }
    },
    computed: {
        // cartItemsCount() {
        //     return this.$store.getters.cartItemsCount
        // },
        // isCartOpen() {
        //     return this.$store.state.isCartOpen
        // }
    },
    methods: {
        deleteTodo(todo) {
            this.$emit('delete', todo._id);
        },
        editTodo(todo) {
            this.$emit('edit', todo._id);
        },
    },
    components: {
        TodoPreview
        // ShoppingCart
    },
}