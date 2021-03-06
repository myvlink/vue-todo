class Task {
  constructor (name, tags, description, date, done, id) {
    this.name = name;
    this.tags = tags;
    this.description = description;
    this.date = date;
    this.done = done;
    this.id = id
  }
}

export default {
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
    id: JSON.parse(localStorage.getItem('id') || 0),
  },

  mutations: {
    createTask (state, payload) {
      state.tasks.push(payload)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
      state.id++
      localStorage.setItem('id', JSON.stringify(state.id))
    },
    completeTask (state, payload) {
      state.tasks.find(a => a.id == payload).done = true
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    
    updateTask (state, {name, description, id}) {
      const task = state.tasks.find( a => {
        return a.id === id
      })
      task.name = name
      task.description = description
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },

  actions: {
    createTask ({commit, state}, payload) {
      const newTask = new Task(
        payload.name,
        payload.tags,
        payload.description,
        payload.date,
        payload.done,
        state.id
      )
      commit('createTask', {...newTask})
    },
    
    completeTask ({commit}, id) {
      commit('completeTask', +id)
    },
    
    updateTask ({commit}, {name, description, id}) {
      commit('updateTask', {
        name, description, id
      })
    } 
  },

  getters: {
    tasks (state) {
      return state.tasks
    },
    taskById (state) {
      return taskId => {
        return state.tasks.find(task => task.id == taskId)
      }
    },
    id (state) {
      return state.id
    },
  }
}
  