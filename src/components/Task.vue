<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <v-card>
                  <v-card-text>
                    <h1 class="text--primary">{{ task.name }}</h1>
                    <p>{{ task.description }}</p>
                    <p>{{ task.tags }}</p>
                  </v-card-text>
                  <v-layout row align-center class="pl-3 pr-3">
                    <span class="mr-2">Done:</span>
                    <v-checkbox :input-value="complete" @click="completeThisTask"></v-checkbox>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <app-edit-task-modal :task="task" color="primary"></app-edit-task-modal>
                    </v-card-actions>
                  </v-layout>
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
