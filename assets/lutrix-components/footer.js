Vue.component('lutrix-footer',{

        template: `
        <footer class="footer-area bg-f7fafd">
		<div class="container">
			<div class="row">
				<div class="col-lg-3 col-md-6">
					<div class="single-footer-widget">
						<div class="logo">
							<a href="/"><img src="assets/img/footer-logo.png" alt="lutrix logo"></a>
						</div>
						<p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
							facilisis.</p>
					</div>
				</div>

				<div class="col-lg-3 col-md-6">
					<div class="single-footer-widget pl-5">
						<h3>Company</h3>
						<ul class="list">
							<li><a href="about.html">About Us</a></li>
							<li><a href="services.html">Our Services</a></li>
							<li><a href="#">Our Products</a></li>
							<li><a href="#">Latest News</a></li>
						</ul>
					</div>
				</div>

				<div class="col-lg-3 col-md-6">
					<div class="single-footer-widget">
						<h3>Support</h3>
						<ul class="list">
							<li><a href="faq.html">FAQ's</a></li>
							<li><a href="policy.html">Privacy Policy</a></li>
							<li><a href="terms.html">Terms & Condition</a></li>
							<li><a href="contact.html">Contact Us</a></li>
						</ul>
					</div>
				</div>

				<div class="col-lg-3 col-md-6">
					<div class="single-footer-widget">
						<h3>Address</h3>

						<ul class="footer-contact-info">
							<li><i data-feather="map-pin"></i> 27 Division St, New York, NY 10002, USA</li>
							<li><i data-feather="mail"></i> Email: <a href="#">info@lutrix.co.bw</a></li>
							<li><i data-feather="phone-call"></i> Phone: <a href="#">+ (267) 984 754</a></li>
						</ul>
						<ul class="social-links">
							<li><a href="#" class="facebook"><i data-feather="facebook"></i></a></li>
							<li><a href="#" class="twitter"><i data-feather="twitter"></i></a></li>
							<li><a href="#" class="instagram"><i data-feather="instagram"></i></a></li>
							<li><a href="#" class="linkedin"><i data-feather="linkedin"></i></a></li>
						</ul>
					</div>
				</div>

				<div class="col-lg-12 col-md-12">
					<div class="copyright-area">
						<p>Copyright @2019 lutrix. All rights reserved</p>
					</div>
				</div>
			</div>
		</div>

		<img src="assets/img/map.png" class="map" alt="map">
		<div class="shape1"><img src="assets/img/shape1.png" alt="shape"></div>
		<div class="shape8 rotateme"><img src="assets/img/shape2.svg" alt="shape"></div>
	</footer>
        
        `,

        data(){
            return{
                
            };
        }
})

new Vue({
    el: '#lutrix-footer'
})