Vue.component('lutrix-cards',{

    template:`<h1>{{message}}</h1>`,

    data(){
        return{
            message:'Wasup'
        };
    }

});

Vue.component('lutrix-card', {
    props:['title', 'description', 'image'],

    template:`
    <div class="col-lg-3 col-md-6">
        <div class="single-box">
            <div class="icon">
                <i :data-feather="image"></i>
            </div>
            <h3>{{title}}</h3>
            <p>{{description}}</p>
        </div>
    </div>
    `
})

new Vue({
    el: '#lutrix-cards'
})