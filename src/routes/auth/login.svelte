<script lang="ts">
import { getDataModels, getFlowId, renderLogin } from "$lib/kratos";

const flowId = getFlowId();
const rendering = getDataModels("login", flowId)
  .then((dm) => renderLogin(dm));
</script>

<h1>login</h1>

{#await rendering then rendered}
{rendered}
{:catch err}
{err.message}
something went wrong
{/await}
