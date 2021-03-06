

export default {
    name: 'TodoDetails',
    template: `
        <section v-if="todo">
            <h1>Todo Details</h1>
            <div>Id: {{todo.id}}</div>
            <div>Text: {{todo.txt}}</div>
            <div>Is Done: {{todo.isDone}}</div>
            <div>Created at: {{formattedDate}}</div>
            <div>Importance: {{todo.importance}}</div>
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

    },
    computed: {
        formattedDate() {
            return moment(this.todo.createdAt).format('MMMM Do YYYY, h:mm:ss a');
        },
        todo() {
            return this.$store.state.currItem;
        }
    }

}