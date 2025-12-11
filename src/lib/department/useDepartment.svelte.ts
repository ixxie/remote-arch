import { getContext, setContext, hasContext } from 'svelte';

import { DepartmentState } from './DepartmentState.svelte';

const key = Symbol('Department-context');

export const useDepartment = () => {
	let state: DepartmentState;
	if (hasContext(key)) {
		state = getContext<DepartmentState>(key);
	} else {
		state = new DepartmentState();
		setContext(key, state);
	}

	return state;
};
