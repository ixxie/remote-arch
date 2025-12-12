import { getContext, setContext, hasContext } from 'svelte';

import { page } from '$app/state'

import { loadDeptEmployees } from './department.remote';
import type { Employee } from './department.types';

const key = Symbol('Department-context');

const initDepartment = async () => {
	let dept_id: string | null = $derived(page.params?.dept_id ?? null)
	let employees: Employee[] = $derived(await loadDeptEmployees({
		department: dept_id
	}))

	return {
		get dept_id() {
			return dept_id
		},
		get employees() {
			return employees
		}
	}
}

type Dept = ReturnType<typeof initDepartment>

export const useDepartment = () => {
	let state: Dept;
	if (hasContext(key)) {
		state = getContext<Dept>(key);
	} else {
		state = initDepartment()
		setContext(key, state);
	}

	return state;
};
