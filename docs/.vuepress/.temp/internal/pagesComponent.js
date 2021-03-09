import { defineAsyncComponent } from 'vue'

export const pagesComponent = {
  "/contributing.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-6ce48554" */"E:/Codes/github/vuepress-starter/docs/.vuepress/.temp/pages/contributing.vue")),
  "/": defineAsyncComponent(() => import(/* webpackChunkName: "v-8daa1a0e" */"E:/Codes/github/vuepress-starter/docs/.vuepress/.temp/pages/README.vue")),
  "/guide/getting-started.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-fb0f0066" */"E:/Codes/github/vuepress-starter/docs/.vuepress/.temp/pages/guide/getting-started.vue")),
  "/guide/": defineAsyncComponent(() => import(/* webpackChunkName: "v-fffb8e28" */"E:/Codes/github/vuepress-starter/docs/.vuepress/.temp/pages/guide/README.vue")),
  "/404.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-3706649a" */"E:/Codes/github/vuepress-starter/docs/.vuepress/.temp/pages/404.html.vue")),
  "/guide/markdown.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-0978b044" */"E:/Codes/github/vuepress-starter/docs/.vuepress/.temp/pages/guide/markdown.vue")),
}
