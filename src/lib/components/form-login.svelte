<script lang="ts">
import { SECUREAPP } from "$lib/config";
import Fieldsets from "$lib/components/fieldsets.svelte";
import Messages from "$lib/components/messages.svelte";
import type { Login } from "$lib/kratos";

export let dm: Login;
</script>

<div class="messages-global">
</div>
<div id="ui">
  <form action="${dm.ui.action}" method="${dm.ui.method}">
    <Messages messages={dm.ui.nodes.messages}/>
    <Fieldsets nodes={dm.ui.nodes}/>
  </form>
</div>

<hr class="divider">

<div class="alternative-actions">
  <a href="{SECUREAPP}/auth/registration">Register new account</a>
  <a href="{SECUREAPP}/auth/recovery">Reset password</a>
</div>
