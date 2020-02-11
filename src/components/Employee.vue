<template>
  <div class="container">
    <div class="welcome">{{welcomeMessage}}</div>

    <div class="alert alert-primary" v-show="message">{{ message }}</div>

    <div>
      <div class="form-group row">
        <label for="Name" class="col-sm-1">Name</label>
        <div class="col-sm-4">
          <input type="text" id="Name" v-model="model.name" class="form-control">
        </div>
      </div>
      <div>
        <button type="submit" @click="find()" class="btn btn-primary">Find</button>
      </div>
    </div>

    <section>
		<p>{{employee.name}}</p>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ToDoModel from "@/models/EmployeeModel";
import store from "@/store/store";
import EmployeeModel from '@/models/EmployeeModel';

@Component({
  components: {}
})
export default class Employee extends Vue {
  private welcomeMessage: string;
  private message: string;
  private employee: EmployeeModel;

  private model: EmployeeModel;

  constructor() {
    super();
    this.welcomeMessage = "Welcome to ToDo App!";
    this.employee = new EmployeeModel();
    this.model = new EmployeeModel();
    this.message = "";
  }

  find() {
	this.$store.dispatch("find", this.model);
    this.model = new EmployeeModel();
  }

}
</script>

<style scoped>
.welcome {
  color: #090629e5;
  margin: 20px;
  font-size: 20px;
}

.message {
  margin: 20px;
  font-size: 14px;
}

section {
  margin: 20px;
}

ol.list-group li:nth-of-type(even) {
  background: #cdecda;
}
</style>