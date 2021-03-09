import { Vuepress } from '@vuepress/client/lib/components/Vuepress'
import pageRoutes0 from 'E:/Codes/github/vuepress-starter/docs/.vuepress/.temp/internal/pageRoutes/v-6ce48554.js'
import pageRoutes1 from 'E:/Codes/github/vuepress-starter/docs/.vuepress/.temp/internal/pageRoutes/v-8daa1a0e.js'
import pageRoutes2 from 'E:/Codes/github/vuepress-starter/docs/.vuepress/.temp/internal/pageRoutes/v-fb0f0066.js'
import pageRoutes3 from 'E:/Codes/github/vuepress-starter/docs/.vuepress/.temp/internal/pageRoutes/v-fffb8e28.js'
import pageRoutes4 from 'E:/Codes/github/vuepress-starter/docs/.vuepress/.temp/internal/pageRoutes/v-3706649a.js'
import pageRoutes5 from 'E:/Codes/github/vuepress-starter/docs/.vuepress/.temp/internal/pageRoutes/v-0978b044.js'

export const pagesRoutes = [
  ...pageRoutes0,
  ...pageRoutes1,
  ...pageRoutes2,
  ...pageRoutes3,
  ...pageRoutes4,
  ...pageRoutes5,
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress,
  },
]
