<script lang="ts">
  import {Bridge} from 'emr-bridge/renderer';

  interface IPublic {
    getMessage(): string;
  }
  const bridge = Bridge.as<IPublic>();

  const message = bridge.getMessage();
</script>

<p>{message}</p>
<code>packages/renderer/src/components/MessageFromMain.svelte</code>
