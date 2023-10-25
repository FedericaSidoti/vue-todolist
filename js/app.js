const createApp = Vue.createApp

createApp({
    data() {
        return {
            newTask: '',
            newTaskContent: {
                text: '',
                done: false,
            },
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
        },

        addTask() {
            this.tasks.push(this.newTaskContent)
            console.log(this.newTask)
        }

    },
    mounted() {
        console.log('ok')
    }
}).mount('#app')