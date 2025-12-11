import type { Employee } from './department.types';

import { loadDeptEmployees } from './department.remote';

import { page } from '$app/state';

export class DepartmentState {
	#dept: string | null = $state(null);
	#employees: Employee[] = $state([]);
	#headcount = $derived(this.#employees.length);

	async sync() {
		const dept_id = page.params?.dept_id;
		if (dept_id && this.#dept !== dept_id) {
			this.#dept = dept_id;
			this.#employees = await loadDeptEmployees(dept_id);
			console.log(this.#employees);
		} else {
			this.#dept = null;
			this.#employees = [];
		}
	}

	get name() {
		return this.#dept;
	}

	get employees() {
		return this.#employees;
	}

	get headcount() {
		return this.#headcount;
	}
}
