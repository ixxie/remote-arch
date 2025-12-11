<script lang="ts">
  const departments = [
    'Engineering',
    'Marketing',
    'Sales',
    'HR',
    'Finance',
    'Operations',
    'Design',
    'Legal'
  ];
</script>

<h1>Welcome to Acme Inc.</h1>
<p>Our site may look like it's from 1999, but it uses SvelteKit remote functions, we swear!</p>
<ul>
  {#each departments as dept}
      <li><b>{dept}</b> - <a href="/layout/{dept}">layout boundary</a></li>
  {/each}
</ul>
