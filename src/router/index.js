import Vue from 'vue'
import Router from 'vue-router'
import pdf from 'vue-pdf'
import Home from '@/components/Home'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'
import PortfolioItem from '@/components/PortfolioItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {  
    path: '/projects/:projectId',
    component: PortfolioItem,
    name: 'project_component'
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
	  },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '*',
      redirect: {
        name: 'home',
      },
    },
  ]
})
