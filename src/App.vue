<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/rhino-logo.svg" width="500" height="300">
    <Employee msg="Welcome to Rhino Vue App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Employee from './components/Employee.vue';

@Component({
  components: {
    Employee,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
