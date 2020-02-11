<template>
  <div class="container">
    <div class="welcome">{{welcomeMessage}}</div>

    <div class="alert alert-primary" v-show="message">{{ message }}</div>

    <div>
      <div class="form-group row">
        <label for="Name" class="col-sm-1">Name</label>
        <div class="col-sm-4">
          <input type="text" id="Name" v-model="findText" class="form-control" />
        </div>
      </div>
      <div>
        <button type="submit" @click="find()" class="btn btn-primary">Find</button>
      </div>
    </div>

    <section>
      <p>{{FoundEmployee.name}}</p>
      <img v-bind:src="FoundEmployee.image" width="500" height="300"/>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "@/store/store";
import EmployeeModel from "@/models/EmployeeModel";

@Component({
  components: {}
})
export default class Employee extends Vue {
  private welcomeMessage: string;
  private message: string;
  private employee: EmployeeModel;

  private findText: string;

  constructor() {
    super();
    this.welcomeMessage = "Welcome to Rhino Vue App!";
    this.employee = new EmployeeModel("", "");
    this.findText = "";
    this.message = "";
  }

  get FoundEmployee(): EmployeeModel[] {
    const foundEmployee = this.$store.state.employee;
    return foundEmployee;
  }

  find() {
    console.log("in find: " + this.findText);
    this.$store.dispatch("find", this.findText).then();
    this.findText = "";
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