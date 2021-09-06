<script lang="ts">
import { getFlowId, render } from "$lib/kratos.ts";

const flowId = getFlowId();
const rendering = render("login", flowId);
</script>

<h1>login</h1>

{#await rendering then renderedForm}
{renderedForm}
{:catch err}
{err.message}
{/await}
