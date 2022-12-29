const app = Vue.createApp({
    data() {
        return {
            firstName: "Jon",
            lastName: "Doe",
            email: "jd@gmail.com",
            gender: "male",
            picture: "https://randomuser.me/api/portraits/men/10.jpg",
        }
    },
    methods: {
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const result = await res.json()
            
            this.firstName = result[0].name.first
            this.lastName = result[0].name.last
            this.email = result[0].email
            this.gender = result[0].gender
            this.picture = result[0].picture.large
        }
    },
})

app.mount('#app')