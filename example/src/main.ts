import Vue from 'vue';
import WebCompressor from 'web-compressor';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Home from './views/Home.vue';
import Plan from './views/Plan.vue';
import About from './views/About.vue';

const routes = {
  '/': Home,
  '/plan': Plan,
  '/about': About,
};

export const planData: any[] = ['', ''];

Vue.config.productionTip = false;

export function setPlanData(plan, query) {
  const { compress } = new WebCompressor('gzip');
  const jsonPlan = JSON.stringify({ src: JSON.parse(plan), query });
  compress(jsonPlan).then((arrayBuffer) => {
    const urlSafe = ('' + arrayBuffer).replace(/\+/g, '-').replace(/\//g, '_');

    planData[0] = plan;
    planData[1] = query;
    app.currentRoute = '/plan';
    history.pushState(null, null, 'plan?p=' + urlSafe);
  });
}

global.setPlanData = setPlanData;

const app = new Vue({
  data: {
    currentRoute: '/',
  },
  created: () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (window.location.pathname === '/plan' && urlParams.get('p')) {
      const decodedUrlSafe = urlParams.get('p').replace(/-/g, '+').replace(/_/g, '/');
      const { decompress } = new WebCompressor('gzip');
      decompress(decodedUrlSafe).then((urlPlan) => {
        const { src, query } = JSON.parse(urlPlan);
        setPlanData(JSON.stringify(src), query);
      });
    }
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute];
    },
  },
  watch: {
    currentRoute: (route) => {
      if (route !== '/plan') {
        history.pushState(null, null, route);
      }
    },
  },
  render(h) {
    return h(this.ViewComponent);
  },
}).$mount('#app');
