import ItemService from '../services/ItemService.js'

const store = new Vuex.Store({
    strict: true,
    state: {
        todoItems: ItemService.query(),
        currItem: null,
        filterBy: {
            text: '',
            type: 'All'
        },
        user: {
            fullName: 'Puki Ben David',
            activities: [
                { txt: 'Added a Todo', at: 1523873242735 }
            ]
        }


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
        addItem(state, item) {
            ItemService.addItem(state.todoItems, item);
        },
        updateItem(state, item) {
            ItemService.updateItem(state.todoItems, item);
        },
        toggleDone(state, item) {
            ItemService.toggleDone(state.todoItems, item);
        },
        setfilterBy(state, filterBy) {
            state.filterBy = filterBy;
        }
        // changeCount(state, diff) {
        //     state.count += diff;
        // },
        // toggleCart(state) {
        //     state.isCartOpen = !state.isCartOpen
        // }
    },
    getters: {
        filterTodoItems(state) {
            var todoList = state.todoItems.filter(item => {
                return item.txt.toLowerCase().includes(state.filterBy.text.toLowerCase());
            });
            if (state.filterBy.type === 'Active') {
                todoList = todoList.filter(item => !item.isDone);
            }
            if (state.filterBy.type === 'Done') {
                todoList = todoList.filter(item => item.isDone);
            }
            return todoList;
        },
        doneTodosPercent(state) {
            var doneTodos = state.todoItems.filter(item => item.isDone);
            return Math.floor((doneTodos.length / state.todoItems.length) * 100);
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

