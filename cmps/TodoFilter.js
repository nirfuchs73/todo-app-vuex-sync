export default {
    template: `
        <section class="email-filter">
            <input type="text" placeholder="Search" v-on:keyup.enter="emitFilter" v-model="filterBy.text" />
            <select v-model="filterBy.type" v-on:change="emitFilter">
                <option value="All" selected>All</option>
                <option value="Active">Active</option>
                <option value="Done">Done</option>
            </select>
            <!-- <button v-on:click="emitFilter">Filter</button> -->
            <!-- <button v-on:click="clearFilter">Clear Filter</button> -->
        </section>
    `,
    data() {
        return {
            filterBy: {
                text: '',
                type: 'All'
            }
        }
    },
    methods: {
        emitFilter() {
            // console.log('Emitting to Parent');
            this.$emit('filtered', { ...this.filterBy });
        },
        clearFilter() {
            this.filterBy.text = '';
            this.filterBy.type = 'All';
            this.$emit('filtered', { ...this.filterBy });
        }
    }
}