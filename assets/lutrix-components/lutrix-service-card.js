Vue.component('lutrix-service',{

    props:['img', 'title', 'description', 'modaltarget', 'downloadlink'],

    template:
    `
            <div class="col-lg-4 col-md-6">
                <div class="single-services-box">
                    <img :src="img" alt="service image">
                    <h3><a href="">{{title}}</a></h3>
                    <p>{{description}}</p>
                    <a href="" class="btn" data-toggle="modal" :data-target="modaltarget">View</a> <a :href="downloadlink" class="btn" download>Download</a>
                </div>
            </div>
    `
})

Vue.component('lutrix-modal', {

    props:['id', 'title', 'view'],
    
    template:`
        <!-- Service Modal -->
        <div class="modal" :id="id">
            <div class="modal-dialog">
            <div class="modal-content">
        
                <!-- Modal Header -->
                <div class="modal-header">
                <h4 class="modal-title">{{title}}</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
        
                <!-- Modal body -->
                <div class="modal-body">
                    <img :src="view" alt="service catalogue" />
                </div>
        
                <!-- Modal footer -->
                <div class="modal-footer">
                <button type="button" class="btn btn" data-dismiss="modal">Close</button>
                </div>
        
            </div>
            </div>
        </div>
    `
    
    })

new Vue({
    el: '#lutrix-services'
})