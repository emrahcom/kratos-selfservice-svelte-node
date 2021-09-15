<script lang="ts">
import { getDataModels, getFlowId, modelLogin } from "$lib/kratos";
import FormLogin from "$lib/components/form-login.svelte";

const flowId = getFlowId();
const modeling = getDataModels("login", flowId)
  .then((dm) => modelLogin(dm));
</script>

{#await modeling then dm}
  <div class="container" id="login">
    <h2 class="subheading">Welcome to this example login screen!</h2>
    <FormLogin {dm}/>
  </div>
{:catch err}
  <p>something went wrong</p>
  {err.message}
{/await}
