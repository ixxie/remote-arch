<script lang="ts">
    const { children } = $props()
</script>

<svelte:boundary>
  {@render children()}
  
  {#snippet pending()}
    LOADING
  {/snippet}
  {#snippet failed(error)}
    {error}
  {/snippet}
</svelte:boundary>