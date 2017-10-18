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
      name: 'Projects',
      component: Home
    },
    {  
    path: '/projects/:projectId',
    component: PortfolioItem,
    name: 'project_component',
    props: true
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
	  },
    {
      path: '/contact',
      name: 'Contact',
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
