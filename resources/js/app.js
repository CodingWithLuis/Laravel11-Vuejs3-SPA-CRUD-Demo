import './bootstrap';
import '../css/app.css';

// import Alpine from 'alpinejs';
//
// window.Alpine = Alpine;
//
// Alpine.start();

import { createApp } from 'vue'
import router from './routes/router.js';

createApp({})
    .use(router)
    .mount("#app")
