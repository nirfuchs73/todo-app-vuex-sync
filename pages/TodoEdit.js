

export default {
    name: 'TodoEdit',
    template: `
        <section v-if="todo">
            <h1>{{(todo._id)? 'Todo Edit' : 'Todo Add'}}</h1>
            <form v-on:submit.prevent="saveTodo" class="todo-edit flex">
                <label>Text:</label>
                <input type="text" v-model="todo.txt" />
                <label>Importance:</label>
                <input type="text" v-model="todo.importance" />
                <button type="submit">Save</button>
            </form>
        </section>  

    `,
    data() {
        return {

        }
    },
    created() {
        var todoId = this.$route.params.todoId;
        this.$store.commit('setCurrItem', todoId);
        // console.log(todoId);
    },
    mounted() {

    },
    methods: {
        saveTodo() {
            console.log("Saving todo..", this.todo);
            this.$store.commit('updateItem', this.todo);
            this.$router.push('/todo');
        }

    },
    computed: {
        todo() {
            return JSON.parse(JSON.stringify(this.$store.state.currItem));
        }
    }
}