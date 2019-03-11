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
        },
        removeItem(state, itemId) {
            ItemService.removeItem(state.todoItems, itemId);
        },
        addItem(state, txt, importance) {
            ItemService.addItem(state.todoItems, txt, importance);
            // state.currItem.push(item);
        },
        // changeCount(state, diff) {
        //     state.count += diff;
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

