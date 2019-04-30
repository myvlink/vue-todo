<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout row justify-center>
        <v-flex xs12 sm8 md6>
          <v-text-field
            v-model="name"
            label="Task name"
            required
            :rules="[v => !!v || 'Name is required']"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-flex xs12 sm8 md6>
          <v-text-field
            v-model="tags"
            label="Tags"
            prepend-icon="label"
            required
            :rules="tagRules"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-flex xs12 sm8 md6>
          <v-textarea
            v-model="description"
            :counter="2048"
            label="Description"
            prepend-icon="description"
            required
            :rules="[ v => !!v || 'Description is required', v => v.length <= 2048 || 'Description length is limited to 2048 characters']"
          ></v-textarea>
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-flex xs12 sm8 md6>
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="dateFormatted"
                label="Deadline"
                prepend-icon="event"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
          </v-menu>
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-flex xs12 sm8 md6>
          <v-btn
            color="success"
            @click="createTask"
            :disabled="!valid"
          >Create task</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
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
  data () {
    return {
      name: '',
      tags: '',
      description: '',
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      id: 1,
      valid: false,
      tagRules: [
        v => !!v || 'Tags is required',
        v => v.split(' ').length <= 5 || 'No more than 5 tags',
        v => /^[A-zА-яЁё ]+$/.test(v) || 'Tags must be only letters'
      ]
    }
  },
  computed: {
    dateFormatted () {
      return this.date.split('-').reverse().join('.');
    }
  },
  methods: {
    createTask () {
      const task = {
        name: this.name,
        tags: this.tags,
        description: this.description,
        date: this.date,
        done: false,
      }
      this.$store.dispatch('createTask', task)
      this.$router.push('/tasks')

    }
  }
}
</script>

<style scoped>
</style>
