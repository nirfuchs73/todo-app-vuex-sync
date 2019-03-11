export default {
    name: 'TodoApp',
    template: `
        <section>
            <h1>TodoApp</h1>
            <ul class="todo-items">
                <li v-for="item in todoItems">
                    <h3>{{item.txt}} {{item.importance}}</h3>
                    <!-- <button @click="addToCart(item)">Add to Cart</button> -->
                </li>
            </ul>
        </section>
    `,
    computed: {
        todoItems() {
            return this.$store.state.todoItems
        }
    },
    methods: {
        // addToCart(item) {
        //     this.$store.commit('addToCart', item)
        // }
    }
}