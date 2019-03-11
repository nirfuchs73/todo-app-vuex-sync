

export default {
    name: 'TodoDetails',
    template: `
        <section v-if="todo">
            <h1>Bug Details</h1>
            <!-- {{todo}} -->
            <div>Id: {{todo._id}}</div>
            <div>Text: {{todo.txt}}</div>
            <div>Is Done: {{todo.isDone}}</div>
            <div>Created at: {{formattedDate}}</div>
            <div>Importance: {{todo.importance}}</div>
        </section>  

    `,
    data() {
        return {
            todo: null

        }
    },
    created() {
        var todoId = this.$route.params.todoId;
        this.$store.commit('setCurrItem', todoId);
        // console.log(todoId);
        this.todo = this.$store.getters.currItem;
        // console.log(this.todo);
    },
    mounted() {

    },
    methods: {

    },
    computed: {
        formattedDate() {
            return moment(this.todo.createdAt).format('MMMM Do YYYY, h:mm:ss a');
        }
    }

}