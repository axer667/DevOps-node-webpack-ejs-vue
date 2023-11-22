import { createApp } from 'vue'

const appFooter = createApp({
    inject: ['user'],
    template: `
    <div>
      {{ user }}
    </div>
  `
})

appFooter.provide('user', 'administrator')
appFooter.mount('#test');