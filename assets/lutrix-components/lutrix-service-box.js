Vue.component('lutrix-service-box',{
    props:['icon',''],

    template: `
    <div class="col-lg-6 col-md-6">
        <div class="box">
             <i :data-feather="icon"></i> <slot></slot>
        </div>
    </div>
    `
})

new Vue({
    el: '#lutrix-services'
})