<script lang="ts>
    const {children} = $props()
</script>

{@render children()}
    
<style>
    :global(*) {
        font-family: sans-serif;
    }
</style>