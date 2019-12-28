Vue.component({

    props:['img', 'title', 'description', 'modal-target', 'download-link'],

    template:
    `
    <div class="col-lg-4 col-md-6">
        <div class="single-services-box">
            <img :src="img" alt="service image">
            <h3><a href="">{{title}}</a></h3>
            <p>{{description}}</p>
            <a href="" class="btn" data-toggle="modal" :data-target="modal-target">View</a> <a :href="download-link" class="btn" download>Download</a>
        </div>
    </div>
    `
})

new Vue({
    el: '#lutrix-services'
})