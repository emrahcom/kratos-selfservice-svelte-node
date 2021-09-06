<script lang="ts">
import { getFlowId, renderForm } from "$lib/kratos";

const flowId = getFlowId();
const rendering = renderForm("login", flowId);
</script>

<h1>login</h1>

{#await rendering then renderedForm}
{renderedForm}
{:catch}
something went wrong
{/await}
