export default {
    template: `
        <section class="email-filter">
            <input type="text" placeholder="Search" v-on:keyup.enter="setFilter" v-model="filterBy.text" />
            <select v-model="filterBy.type" v-on:change="setFilter">
                <option value="All" selected>All</option>
                <option value="Active">Active</option>
                <option value="Done">Done</option>
            </select>
        </section>
    `,
    data() {
        return {

        }
    },
    computed: {
        filterBy() {
            return { ...this.$store.state.filterBy };
        }
    },
    methods: {
        setFilter() {
            this.$store.commit('setfilterBy', this.filterBy);
        },
    }
}