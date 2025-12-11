<script lang="ts">
  import {useDepartment, loadDeptEmployees} from '$lib/department'

  import { page } from '$app/state'

  const department = useDepartment()
</script>

<a href="/">back</a>

<h1>{department.name}</h1>

<svelte:boundary>
  {await department.sync()}
  {#each department.employees as employee}
    <article>
      <b>{employee.firstName} {employee.lastName}</b>
      <i>{employee.title}</i>
      <i>{employee.email}</i>
    </article>
  {/each}
  {#snippet pending()}
    LOADING
  {/snippet}
  {#snippet failed(error)}
    {error}
  {/snippet}
</svelte:boundary>

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
