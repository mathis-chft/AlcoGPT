import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import './components/chat.vue'
import "./components/navbar.vue"
import "./components/home.vue";
import "./components/productcard.vue";
import "./components/recipecard.vue";
import "./components/chat.vue";

const app = createApp(App)

app.use(router)

app.mount('#app')
