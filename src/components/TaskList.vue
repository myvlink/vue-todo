<template>
  <v-container>
    <v-layout row wrap>
    </v-layout>
    
    <v-layout>
      
      <v-flex xs12 sm3>
        <v-switch
          v-model="completed"
          label="Completed"
          hide-details
        ></v-switch>
        <v-switch
          v-model="expired"
          label="Expired"
          hide-details
        ></v-switch>
      </v-flex>

      <v-flex xs12 sm8>
        <v-card v-for="task in filteredTasks" :key="task.id" class="mb-2">
          <v-card-title task.name>
            <div>
              <h3 class="headline mb-0">{{ task.name }}</h3>
              <div> {{ task.description }} </div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn
              flat
              color="orange"
              :to="`/tasks/${task.id}`"
            >Open</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>



</template>

<script>
export default {
  data () {
    return {
      completed: true,
      expired: true
    }
  },
  computed: {
    filteredTasks () {
      if (this.completed && this.expired) {
        return this.$store.getters.tasks
      }

      if (this.completed && !this.expired) {
        return this.$store.getters.tasks.filter(task => {
          return Date.parse(task.date) > new Date()
        })
      }
      
      if (!this.completed && this.expired) {
        return this.$store.getters.tasks.filter(task => {
          return !task.done
        }) 
      } 
    }
  }
}
</script>

<style scoped>
</style>
