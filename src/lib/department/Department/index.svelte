<script lang="ts">
	import Department from './Department.svelte';
	import DepartmentPending from './DepartmentPending.svelte';
	import DepartmentError from './DepartmentError.svelte';
</script>

<svelte:boundary>
	<Department/>

	{#snippet pending()}
		<DepartmentPending/>
	{/snippet}
	{#snippet failed(error)}
		<DepartmentError {error}/>
	{/snippet}
</svelte:boundary>
