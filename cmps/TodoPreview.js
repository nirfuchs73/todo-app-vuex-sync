// import UserMsg from './UserMsg.js'
// import ShoppingCart from './ShoppingCart.js'


export default {
    name: 'TodoPreview',
    props: ['todo'],
    template: `
        <div class="todo-preview flex">
            <div v-bind:class="classObject">{{todo.txt}} {{todo.importance}}</div>
        </div>
    `,
    created() {

    },
    data() {
        return {

        }
    },
    computed: {
        classObject() {
            return {
                'done': this.todo.isDone,
                'un-done': !this.todo.isDone
            }
        }
    },
    methods: {

    },
    components: {

    },
}