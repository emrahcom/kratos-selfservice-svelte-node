<script lang="ts">
  import { browser } from "$app/environment";
  import { KRATOS } from "$lib/config";
  import { get } from "svelte/store";
  import identity from "$lib/stores/kratos/identity";

  const _identity = get(identity);

  if (browser && !_identity.id) {
    const loginUrl = `${KRATOS}/self-service/login/browser`;
    window.location.replace(loginUrl);
  }
</script>

<!-- -------------------------------------------------------------------------->
<slot />
