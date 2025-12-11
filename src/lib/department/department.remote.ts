import { query } from '$app/server';

import * as v from 'valibot';

import { genEmployees, delay } from './utils';

export const loadDeptEmployees = query(v.string(), async (department: string) => {
	await delay(1000);
	return Array.from({ length: 50 }, (_, i) => genEmployees(department, i));
});
