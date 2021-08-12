const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
            console.log(this.cart)
        },
        removeItem() {
            this.cart.pop()
        }
    }
})
