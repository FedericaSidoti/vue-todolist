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

    },
    mounted() {
        console.log('ok')
    }
}).mount('#app')