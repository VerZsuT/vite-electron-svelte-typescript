<script lang="ts">
  import {versions} from '#preload';
</script>

<table id="process-versions">
  {#each Object.entries(versions) as [lib, version] (lib)}
    <tr role="row">
      <th>{lib} :</th>
      <td>v{version}</td>
    </tr>
  {/each}
</table>
<code>packages/renderer/src/components/ElectronVersions.svelte</code>

<style>
  table {
    margin: auto;
  }

  th {
    text-align: right;
  }

  td {
    text-align: left;
  }
</style>
