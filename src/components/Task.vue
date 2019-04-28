<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <v-card>
                  <v-card-text>
                    <h1 class="text--primary">{{ task.name }}</h1>
                    <p>{{ task.description }}</p>
                    
                    <v-layout row align-center>
                      <span class="mr-2">Done:</span>
                      <v-checkbox :input-value="complete" @click="completeThisTask"></v-checkbox>
                    </v-layout>
                  </v-card-text>
                  
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <app-edit-task-modal :task="task" color="primary"></app-edit-task-modal>
                  </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import EditTaskModal from './EditTaskModal'

export default {
  props: ['id'],
  computed: {
    task () {
      return this.$store.getters.taskById(this.id)
    },
    complete () {
      console.log(this.$store.getters.taskById(this.id).done)
      return this.$store.getters.taskById(this.id).done
    }
  },
  methods: {
    completeThisTask () {
      this.$store.dispatch('completeTask', this.id)
    }
  },
  components: {
    appEditTaskModal: EditTaskModal
  }
}
</script>
