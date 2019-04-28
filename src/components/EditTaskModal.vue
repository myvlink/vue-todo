<template>
  <v-dialog width="400px" v-model="modal">
    <v-btn class="v-btn__content mr-2" flat slot="activator">Edit</v-btn>
    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs-12>
            <v-card-title>
              <h1 class="text--primary">Edit task</h1>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs-12>
            <v-card-text>
              <v-text-field
                name="name"
                label="Name"
                type="text"
                v-model="editedName"
              ></v-text-field>
              <v-textarea
                name="description"
                label="Description"
                type="text"
                v-model="editedDescription"
              ></v-textarea>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs-12>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat @click="onCancel">Cancel</v-btn>
              <v-btn flat class="success" @click="onSave">Save</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['task'],
  data () {
    return {
      modal: false,
      editedName: this.task.name,
      editedDescription: this.task.description
    }
  },
  methods: {
    onCancel () {
      this.modal = false,
      this.editedDescription = this.task.description
      this.editedName = this.task.name
    },
    onSave () {
      if (this.editedDescription !== '' && this.editedName !== '')
        this.$store.dispatch('updateTask', {
          name: this.editedName,
          description: this.editedDescription,
          id: this.task.id
        })
        this.modal = false;
    }
  }
}
</script>
