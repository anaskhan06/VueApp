import Vue from "vue";
import Router from "vue-router";
import Footer from "./components/footer.vue"
import Terms from "./components/terms.vue"
Vue.use(Router);
const routes = [
    { path: '/', component: Footer },
    { path: '/terms', component: Terms },
    { path: '/faqs', component: Terms },
    { path: '/policy', component: Terms },
    { path: '/apis', component: Terms }
]
const router = new Router({
    routes,
    mode: "history"
})
export default router;