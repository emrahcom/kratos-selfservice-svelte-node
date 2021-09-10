<script lang="ts">
import { getDataModels, getFlowId, modelLogin } from "$lib/kratos";
import LoginForm from "$lib/components/login-form.svelte";

const flowId = getFlowId();
const modeling = getDataModels("login", flowId)
  .then((dm) => modelLogin(dm));
</script>

<div class="container" id="login">
  <h5 class="subheading">Welcome to this example login screen!</h5>

{#await modeling then dm}
  <LoginForm {dm}/>
{:catch err}
  <h6>something went wrong</h6>
  {err.message}
{/await}

</div>
