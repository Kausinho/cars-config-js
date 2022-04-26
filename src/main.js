import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import PrimeIcons from 'primeicons/primeicons.css';

createApp(App).mount('#app')

App.use(PrimeVue);
App.use(PrimeIcons);
