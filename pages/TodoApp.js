import TodoList from '../cmps/TodoList.js';
import TodoFilter from '../cmps/TodoFilter.js';

export default {
    name: 'TodoApp',
    template: `
        <section class="todo-app todo-wrapper">
            <!-- <h1>Todo App</h1> -->
            <todo-filter class="todo-app-header-item"></todo-filter>
            <todo-list v-bind:todos="todoItems" v-on:delete="deleteTodo" v-on:edit="editTodo" v-on:toggle-done="toggleDone"></todo-list>
            <button v-on:click="addTodo">Add Todo</button>
        </section>
    `,
    data() {
        return {

        }
    },
    created() {
        this.$store.dispatch({ type: 'loadTodoItems' })
            .catch(err => {
                // EventBusService.$emit(SHOW_MSG, { txt: 'Cannot Load shop, try refreshing', type: 'danger' });
                console.log(err);
            });
    },
    computed: {
        todoItems() {
            return this.$store.getters.filterTodoItems;
        },
    },
    methods: {
        deleteTodo(itemId) {
            console.log('deleteTodo');
            // this.$store.commit('removeItem', itemId);
            // console.log('Removing', this.shopItem);
            this.$store.dispatch({ type: 'removeItem', itemId: itemId })
                .then(() => {
                    // this.$router.push('/shop')
                })
        },
        editTodo(itemId) {
            console.log('editTodo');
            this.$router.push('/todo/edit/' + itemId);
        },
        toggleDone(item) {
            console.log('toggleDone');
            var todo = JSON.parse(JSON.stringify(item));
            todo.isDone = !todo.isDone;
            // this.$store.commit('toggleDone', item);
            // console.log("Saving todo..", todo);
            this.$store.dispatch({ type: 'updateItem', item: todo })
                .then((res) => {
                    console.log(res);
                    // this.$router.push('/shop')
                    // this.$router.push('/todo');
                });
        },
        addTodo() {
            console.log('addTodo');
            var txt = prompt('Todo:');
            var importance = +prompt('Importance:');
            var item = this.$store.getters.emptyTodoItem;
            item.txt = txt;
            item.importance = importance;
            // this.$store.commit('addItem', { item });
            console.log('Saving ITEM', item);
            this.$store.dispatch({ type: 'addItem', item: item })
                .then((res) => {
                    console.log(res);
                    // this.$router.push('/shop')
                });
        },
    },
    components: {
        TodoList,
        TodoFilter,
    }
}