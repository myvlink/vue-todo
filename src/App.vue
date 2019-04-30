<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title >
        <span>To-Do APP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat to="/">New task</v-btn>
      <v-btn flat to="/tasks" exact>Task List</v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      //
    }
  },
  created() {
    console.log(this.$store.getters.id)
  }
}
</script>
