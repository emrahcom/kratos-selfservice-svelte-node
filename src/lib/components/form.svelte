<script lang="ts">
import Fieldsets from "$lib/components/fieldsets.svelte";
import MessagesGlobal from "$lib/components/messages-global.svelte";
import type { KratosForm } from "$lib/kratos";

export let dm: KratosForm;
</script>

<MessagesGlobal messages={dm.ui.messages} />

<div id="ui">
  <form action="{dm.ui.action}" method="{dm.ui.method}">
    <Fieldsets nodes={dm.ui.nodes} />
  </form>
</div>
