import TodoList from '../cmps/TodoList.js';
import TodoFilter from '../cmps/TodoFilter.js';

export default {
    name: 'TodoApp',
    template: `
        <section class="todo-app todo-wrapper">
            <h1>Todo App</h1>
            <todo-filter class="todo-app-header-item" v-on:filtered="setFilter"></todo-filter>
            <todo-list v-bind:todos="todoItems" v-on:delete="deleteTodo" v-on:edit="editTodo" v-on:done="doneTodo"></todo-list>
            <button v-on:click="addTodo">Add Todo</button>
        </section>
    `,
    data() {
        return {
            filterBy: {
                text: '',
                type: ''
            },
        }
    },
    computed: {
        todoItems() {
            if (this.filterBy.text === '' && this.filterBy.type === 'All') {
                return this.$store.state.todoItems;
            } else {
                this.$store.commit('setfilterBy', { ...this.filterBy });
                return this.$store.getters.filterTodoItems;
            }
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
        },
        doneTodo(itemId) {
            console.log('doneTodo');
            this.$store.commit('setCurrItem', itemId);
            this.$store.commit('toggleCurrItemDone');
        },
        setFilter(filterBy) {
            // console.log('EmailApp Got Filter: ', filterBy);
            this.filterBy = filterBy;
        },
    },
    components: {
        TodoList,
        // bookDetails,
        TodoFilter,
        // bookAdd
    }
}