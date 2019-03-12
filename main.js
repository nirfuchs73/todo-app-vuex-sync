'use strict'

// import StorageService from './services/StorageService.js'


import myRoutes from './routes.js'
Vue.use(VueRouter);
const myRouter = new VueRouter({ routes: myRoutes })
import myStore from './store/store.js'

import AppHeader from './cmps/AppHeader.js';
// import AppFooter from './cmps/AppFooter.js'


new Vue({
    template: `
        <section>
            <router-link to="/">Home</router-link>
            <router-link to="/todo">Todo</router-link>
            <app-header></app-header>
            <router-view></router-view>
            <!-- <app-footer></app-footer> -->
        </section>
    `,
    created() {
        console.log('Vue App was created!!!');
    },
    components: {
        AppHeader,
        // AppFooter
    },
    
    router: myRouter,
    store: myStore
}).$mount('#app')