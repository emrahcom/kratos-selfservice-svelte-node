<script lang="ts">
  import { APP } from "$lib/config";
  import { get } from "svelte/store";
  import identity from "$lib/stores/kratos/identity";

  const _identity = get(identity);
  let email = "";

  if (_identity && _identity.traits) email = _identity.traits.email;
</script>

<!-- -------------------------------------------------------------------------->
<section id="dashboard">
  <h2>Dashboard</h2>

  <p>Hello {email}</p>
  <p><a href="{APP}/settings">Settings</a></p>
  <p><a href="{APP}/logout">Logout</a></p>
</section>
