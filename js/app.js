const createApp = Vue.createApp

createApp({
    data() {
        return {
            tasks: [
                {
                    text: 'Fare il nuovo esercizio',
                    done: false,
                },
                {
                    text: 'Riguardare le repo dei livecoding',
                    done: false,
                },
                {
                    text: 'Piangere coi colleghi',
                    done: true,
                }
            ]
        }
    },
    methods : {
        removeTask(index) {
            this.tasks.splice(index, 1)
        }

    },
    mounted() {
        console.log('ok')
    }
}).mount('#app')