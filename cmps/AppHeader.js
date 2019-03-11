// import UserMsg from './UserMsg.js'
// import ShoppingCart from './ShoppingCart.js'

export default {
    name: 'AppHeader',
    template: `
    <header>
        <nav>
            <h1 class="main-title">Todo App</h1>
            <h3>{{user.fullName}}</h3>
            <progress value="doneTodosPercent" max="100"></progress>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="doneTodosPercent" aria-valuemin="0" aria-valuemax="100" style="width:doneTodosPercent%">
                    <span class="sr-only">{{doneTodosPercent}}% Complete</span>
                </div>
            </div>
            <!-- <router-link to="/shop">Go Shopping</router-link> -->
        </nav>
        <!-- <button v-if="cartItemsCount" @click="toggleCart" >Your Cart {{cartItemsCount}}</button> -->
        <!-- <shopping-cart v-if="isCartOpen"></shopping-cart> -->
        <!-- <user-msg></user-msg> -->
    </header>
    `,
    created() {

    },
    data() {
        return {

        }
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        doneTodosPercent() {
            console.log(this.$store.getters.doneTodosPercent);
            return this.$store.getters.doneTodosPercent;
        }
        // cartItemsCount() {
        //     return this.$store.getters.cartItemsCount
        // },
        // isCartOpen() {
        //     return this.$store.state.isCartOpen
        // }
    },
    methods: {
        // toggleCart() {
        //     this.$store.commit('toggleCart')
        // }
    },
    components: {
        // UserMsg,
        // ShoppingCart
    },
}