Vue.component('lutrix-mobile-nav',{

    props:['link', 'image', 'alt'],

    template: `
    <div class="lutrix-mobile-nav">
        <div class="logo">
            <a :href="link"><img :src="image" :alt="alt"></a>
        </div>
    </div>
    `
})

Vue.component('lutrix-nav',{

    props:['home', 'services', 'about', 'contact', 'faq'],

    template: `
    <div class="lutrix-nav">
        <div class="container">
            <nav class="navbar navbar-expand-md navbar-light">
                <a class="navbar-brand" href="/"><img  src="assets/img/logo.png" alt="logo"></a>

                <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                    <ul class="navbar-nav nav ml-auto">
                        <li class="nav-item"><a href="/" :class="home">Home</a>
                        </li>

                        <li class="nav-item"><a href="services.html" :class="services">Services</a>
                        </li>

                        <li class="nav-item"><a href="about.html" :class="about">About</a></li>

                        <li class="nav-item"><a href="contact.html" :class="contact">Contact</a></li>

                        <li class="nav-item"><a href="faq.html" :class="faq">FAQs</a></li>
                    </ul>
                </div>

                <div class="others-option">
                    <a href="#" class="btn btn-light">Support</a>
                
                </div>
            </nav>
        </div> 
    </div>
    `
})

new Vue({
    el:'#header'
})
