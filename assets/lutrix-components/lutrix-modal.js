Vue.component('lutrix-modal',{
props:['modal-id', 'modal-title', 'service-view'],

template:`

    <!-- Service Modal -->
    <div class="modal" :id="modal-id">
        <div class="modal-dialog">
        <div class="modal-content">
    
            <!-- Modal Header -->
            <div class="modal-header">
            <h4 class="modal-title">{{modal-title}}</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
    
            <!-- Modal body -->
            <div class="modal-body">
                <img :src="service-view" alt="service catalogue" />
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