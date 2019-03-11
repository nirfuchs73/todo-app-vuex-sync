import UserMsg from './UserMsg.js'
import ShoppingCart from './ShoppingCart.js'


export default {
    template: `
    <header>
        <nav>
            <h1 class="main-title">App App</h1> 
            <router-link to="/shop">Go Shopping</router-link>
        </nav>
        <button v-if="cartItemsCount" @click="toggleCart" >Your Cart {{cartItemsCount}}</button>
        <shopping-cart v-if="isCartOpen"></shopping-cart>
        <user-msg></user-msg>
    </header>
    `,
    created() { },
    data() {
        return {
        }
    },
    computed: {
        cartItemsCount() {
            return this.$store.getters.cartItemsCount
        },
        isCartOpen() {
            return this.$store.state.isCartOpen
        }
    },
    methods: {
        toggleCart() {
            this.$store.commit('toggleCart')
        }
    },
    components: {
        UserMsg,
        ShoppingCart
    },
}