// import UserMsg from './UserMsg.js'
// import ShoppingCart from './ShoppingCart.js'


export default {
    name: 'TodoPreview',
    props: ['todo'],
    template: `
        <div class="todo-preview flex">
            <div>{{todo.txt}} {{todo.importance}}</div>
        </div>
    `,
    created() {

    },
    data() {
        return {

        }
    },
    computed: {
        
    },
    methods: {
        
    },
    components: {
        
    },
}