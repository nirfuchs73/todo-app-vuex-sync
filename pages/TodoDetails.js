import EventBusService, { SHOW_MSG } from '../services/EventBusService.js'

export default {
    template: `
        <section>
            <section>
                <button @click="changeCount(1)">+</button>
                {{count}}
                <button @click="changeCount(-1)">-</button>
            </section>
            <img src="img/logo.png"/>
        </section>
    
    `,
    data() {
        return {
        }
    },
    mounted() {
        console.log('STORE', this.$store);
        EventBusService.$emit(SHOW_MSG, { txt: 'HomePage Loaded!', type: 'success' });
    },
    methods: {
        changeCount(diff) {
            this.$store.commit('changeCount', diff)
            // this.$store.commit({type: 'changeCount', diff:diff})
        }
    },
    computed: {
        count() {
            return this.$store.getters.countForDisplay
        },
        user() {
            return this.$store.state.user

        }
    }

}