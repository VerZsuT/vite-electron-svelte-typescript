<script lang="ts">
  import ElectronVersions from './components/ElectronVersions.svelte';
  import MessageFromMain from './components/MessageFromMain.svelte';
  import ReactiveCounter from './components/ReactiveCounter.svelte';
  import ReactiveHash from './components/ReactiveHash.svelte';

  const APP_VERSION = import.meta.env.VITE_APP_VERSION;
</script>

<img
  alt="Vue logo"
  src="../assets/logo.svg"
  width="150"
/>

<p>
  <!-- Example how to inject current app version to UI -->
  App version: {APP_VERSION}
</p>

<p>
  For a guide and recipes on how to configure / customize this project,<br />
  check out the
  <a
    href="https://github.com/cawa-93/vite-electron-builder"
    target="_blank"
  >
    vite-electron-builder documentation
  </a>
  .
</p>

<fieldset>
  <legend>Test Svelte Reactivity</legend>
  <ReactiveCounter />
</fieldset>

<fieldset>
  <legend>Test Node.js API</legend>
  <ReactiveHash />
</fieldset>

<fieldset>
  <legend>Test IPC</legend>
  <MessageFromMain />
</fieldset>

<fieldset>
  <legend>Environment</legend>
  <ElectronVersions />
</fieldset>

<p>
  Edit
  <code>packages/renderer/src/App.svelte</code> to test hot module replacement.
</p>

<style>
  :global(#app) {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 60px auto;
    max-width: 700px;
  }

  fieldset {
    margin: 2rem;
    padding: 1rem;
  }
</style>
