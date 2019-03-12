import EventBusService, { SHOW_MSG } from '../services/EventBusService.js';

export default {
    name: 'TodoEdit',
    template: `
        <section v-if="todo">
            <h1>{{(todo.id)? 'Todo Edit' : 'Todo Add'}}</h1>
            <form v-on:submit.prevent="saveTodo" class="todo-edit flex">
                <label>Text:</label>
                <input type="text" v-model="todo.txt" />
                <label>Importance:</label>
                <input type="number" min="1" max="3" v-model.number="todo.importance" />
                <button type="submit">Save</button>
            </form>
        </section>  

    `,
    data() {
        return {

        }
    },
    created() {
        var itemId = this.$route.params.todoId;
        // this.$store.commit('setCurrItem', todoId);
        this.$store.dispatch({ type: 'loadTodoItem', itemId });
        // console.log(todoId);
    },
    mounted() {

    },
    methods: {
        saveTodo() {
            console.log("Saving todo..", this.todo);
            // this.$store.commit('updateItem', this.todo);
            // console.log('Saving ITEM', item);
            this.$store.dispatch({ type: 'updateItem', item: this.todo })
                .then((res) => {
                    console.log(res);
                    // this.$router.push('/shop')
                    EventBusService.$emit(SHOW_MSG, { txt: 'Todo Saved!', type: 'success' });
                    this.$router.push('/todo');
                });
        }
    },
    computed: {
        todo() {
            return JSON.parse(JSON.stringify(this.$store.state.currItem));
        }
    }
}