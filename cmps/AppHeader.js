export default {
    name: 'AppHeader',
    template: `
    <header>
        <nav>
            <h1 class="main-title">Todo App</h1>
            <h3>{{user.fullName}}</h3>
            Todos Done: {{doneTodosPercent}}%
            <!-- <progress value="doneTodosPercent" max="100"></progress> -->
            <!-- <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="doneTodosPercent" aria-valuemin="0" aria-valuemax="100" style="width:doneTodosPercent%">
                    <span class="sr-only">{{doneTodosPercent}}% Complete</span>
                </div>
            </div> -->
        </nav>
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
            // console.log(this.$store.getters.doneTodosPercent);
            return this.$store.getters.doneTodosPercent;
        }

    },
    methods: {

    },
    components: {

    },
}