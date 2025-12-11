import type { Employee } from './department.types';

const firstNames = [
	'Emma',
	'Liam',
	'Olivia',
	'Noah',
	'Ava',
	'Ethan',
	'Sophia',
	'Mason',
	'Isabella',
	'James'
];
const lastNames = [
	'Smith',
	'Johnson',
	'Williams',
	'Brown',
	'Jones',
	'Garcia',
	'Miller',
	'Davis',
	'Martinez',
	'Wilson'
];

const titles = [
	'Manager',
	'Senior Developer',
	'Analyst',
	'Coordinator',
	'Director',
	'Specialist',
	'Lead',
	'Associate'
];

function randomFrom<T>(arr: T[]): T {
	return arr[Math.floor(Math.random() * arr.length)];
}

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function genEmployees(department: string, index: number): Employee {
	const firstName = randomFrom(firstNames);
	const lastName = randomFrom(lastNames);
	return {
		id: crypto.randomUUID(),
		firstName,
		lastName,
		email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${index}@company.com`,
		department,
		title: randomFrom(titles),
		salary: Math.floor(50000 + Math.random() * 100000),
		startDate: new Date(
			2015 + Math.floor(Math.random() * 10),
			Math.floor(Math.random() * 12),
			Math.floor(Math.random() * 28) + 1
		)
	};
}
