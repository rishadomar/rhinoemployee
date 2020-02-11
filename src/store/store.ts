import Vuex from 'vuex'
import Vue from 'vue'
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
		find(context, employeeModel: EmployeeModel) {
			return new Promise((resolve, reject) => {
				context.commit('setEmployee', employeeModel);
				resolve();
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