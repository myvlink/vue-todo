import Vue from 'vue'
import Router from 'vue-router'
import NewTask from '../components/NewTask.vue'
import TaskList from '../components/TaskList.vue'
import Task from '../components/Task.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'NewTask',
      component: NewTask
    },
    {
        path: '/tasks/:id',
        props: true,
        name: 'Task',
        component: Task
    },
    {
      path: '/tasks',
      name: 'TaskList',
      component: TaskList
    }
  ]
})
