<script lang="ts">
	import { useDepartment } from '$lib/department';

	const department = await useDepartment();

	if (Math.random() < 0.5) {
		throw Error("Department Error")
	}
</script>

<h1>{department.dept_id}</h1>

{#each department.employees as employee}
	<article>
		<b>{employee.firstName} {employee.lastName}</b>
		<i>{employee.title}</i>
		<i>{employee.email}</i>
	</article>
{/each}

<style>
	article {
		display: flex;
		flex-flow: column nowrap;
		padding: 1rem;
		background: steelblue;
		color: white;
		margin: 1rem;
		border-radius: 0.5rem;
	}
</style>
