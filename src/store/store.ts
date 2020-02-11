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
		find(context, findText: string) {
			console.log('In store: ' + findText);
			return new Promise((resolve, reject) => {
				context.commit('setEmployee', new EmployeeModel(findText + ' Rishad Omar'));
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