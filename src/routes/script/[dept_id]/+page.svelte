<script lang="ts">
  import {useDepartment, loadDeptEmployees} from '$lib/department'

  import { page } from '$app/state'

  const department = useDepartment()

  await department.sync()
</script>

<a href="/">back</a>

<h1>{department.name}</h1>

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
    background: orangered;
    color: white;
    margin: 1rem;
    border-radius: 0.5rem;
  }
</style>