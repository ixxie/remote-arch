import { query } from '$app/server';

import * as v from 'valibot';

import { genEmployees, delay } from './utils';

export const loadDeptEmployees = query(
	v.object({ department: v.nullable(v.string()) }),
	async ({ department }) => {
		await delay(1000);
		console.log('remote: loading ', department);
		const result = department
			? Array.from({ length: 50 }, (_, i) => genEmployees(department, i))
			: [];
		console.log('remote: got ', result.length, ' results');
		return result;
	}
);
