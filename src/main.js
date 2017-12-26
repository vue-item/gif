import App from './pages/App'
import './common/lib/gif'
// import router from './router'

new Vue({
  // store,
  // router,
  el: '#root',
  render: h => h(App),
  renderError (h, err) {
    return h('pre', { style: { color: 'red' }}, err.stack)
  }
})