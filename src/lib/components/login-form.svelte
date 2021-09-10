<script lang="ts">
import { SECUREAPP } from "$lib/config";
import type { Login } from "$lib/kratos";

export let dm: Login;
</script>

<div class="messages-global">
</div>
<div id="ui">
  <form action="${dm.ui.action}" method="${dm.ui.method}">
  <div class="message"></div>
  {#each dm.ui.nodes.filter((n) => n.type === "input") as node}
    {node.attributes.name}
  {/each}
  </form>
</div>

<hr class="divider">

<div class="alternative-actions">
  <a href="{SECUREAPP}/auth/registration">Register new account</a>
  <a href="{SECUREAPP}/auth/recovery">Reset password</a>
</div>
