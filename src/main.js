import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
import gAuthPlugin from 'vue3-google-oauth2';
let gauthClientId = '742461452195-2e8snplf9bk602lamp5bj360m5i1p0p9.apps.googleusercontent.com';
app.use(gAuthPlugin, {
  clientId: gauthClientId,
  scope: 'email',
  prompt: 'consent',
})

app.mount('#app')
