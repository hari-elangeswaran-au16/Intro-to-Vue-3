app.component('product-details',{
    props: {
        details: {
            type: String,
            required: true
        }
    },
    template: 
    /*html*/
    `<div>{{ productDetails }}</div>`,
    computed: {
        productDetails() {
            if (this.details) {
                return this.details
            }
            return "No Details"
        }
    }
})