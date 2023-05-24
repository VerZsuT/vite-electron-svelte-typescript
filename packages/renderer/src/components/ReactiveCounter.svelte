<svelte:options immutable={true} />

<script lang="ts">
  let count = 0;
</script>

<button on:click={() => count++}> count is: {count}</button>
<br /><br />
<code>packages/renderer/src/components/ReactiveCounter.svelte</code>
