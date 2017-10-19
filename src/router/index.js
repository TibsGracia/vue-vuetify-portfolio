import Vue from 'vue'
import Router from 'vue-router'
import pdf from 'vue-pdf'
import Home from '@/components/Home'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'
import Project from '@/components/Project'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Projects',
      component: Home
    },
    {  
    path: '/projects/:projectId',
    component: Project,
    name: 'project_component',
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
        name: 'Projects',
      },
    },
  ]
})
