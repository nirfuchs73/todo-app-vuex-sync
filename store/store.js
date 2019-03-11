import ItemService from '../services/ItemService.js'

const store = new Vuex.Store({
    strict: true,
    state: {
        todoItems: ItemService.query(),
        currItem: null,
        filterBy: '',

        //    count: 7988787,
        //    cartItems: [],
        //    isCartOpen: false
    },
    mutations: {
        setCurrItem(state, itemId) {
            state.currItem = ItemService.getItemById(state.todoItems, itemId);
        }
        // changeCount(state, diff) {
        //     state.count += diff;
        // },
        // addToCart(state, item) {
        //     state.cartItems.push(item)
        // },
        // removeFromCart(state, itemId) {
        //     const idx  = state.cartItems.findIndex(item => item._id === itemId);
        //     state.cartItems.splice(idx, 1);
        // },
        // toggleCart(state) {
        //     state.isCartOpen = !state.isCartOpen
        // }
    },
    getters: {
        currItem(state) {
            return state.currItem;
        }
        // cartTotal(state) {
        //     return state.cartItems.reduce((acc, item)=>acc + item.price, 0)
        // },
        // cartItemsCount(state) {
        //     return state.cartItems.length
        // },
        // countForDisplay(state, otherGetters) {
        //     return state.count.toLocaleString()
        // }
    }
})

export default store;

