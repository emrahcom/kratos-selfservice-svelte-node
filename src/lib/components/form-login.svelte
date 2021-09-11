<script lang="ts">
import { SECUREAPP } from "$lib/config";
import Fieldsets from "$lib/components/fieldsets.svelte";
import MessagesGlobal from "$lib/components/messages-global.svelte";
import type { Login } from "$lib/kratos";

export let dm: Login;
</script>

<MessagesGlobal messages={dm.ui.messages}/>

<div id="ui">
  <form action="{dm.ui.action}" method="{dm.ui.method}">
    <Fieldsets nodes={dm.ui.nodes}/>
  </form>
</div>

<hr class="divider">

<div class="alternative-actions">
  <a href="{SECUREAPP}/auth/registration">Register new account</a>
  <a href="{SECUREAPP}/auth/recovery">Reset password</a>
</div>
