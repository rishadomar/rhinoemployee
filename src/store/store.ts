import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import EmployeeModel from '../models/EmployeeModel';

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		employee: EmployeeModel
	},

	mutations: {
		setEmployee(state, employeeModel: EmployeeModel) {
			state.employee = employeeModel;
		}
	},
	actions: {
		find(context, findText: string) {
			console.log('In store: ' + findText);
			axios
				.get('http://localhost:8080/api/v1/employee?name=' + findText)
//				.then(r => r.data)
				.then(response => {
					const employeeEntries = response.data;
					const firstEmployee = employeeEntries[0];
					context.commit('setEmployee', new EmployeeModel(firstEmployee.firstName + ' ' + firstEmployee.lastName, firstEmployee.cardImage))
				});
		},

		setEmployee(context, employeeModel: EmployeeModel) {
			return new Promise((resolve, reject) => {
				context.commit('setEmployee', employeeModel);
				resolve();
			});
		}
	}
});