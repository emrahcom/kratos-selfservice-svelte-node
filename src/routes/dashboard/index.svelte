<script lang="ts">
  import { APP } from "$lib/config";
  import identity from "$lib/stores/kratos/identity";
</script>

<!-- -------------------------------------------------------------------------->
<section id="dashboard">
  <h2>Dashboard</h2>

  <p>Hello {$identity.traits.email}</p>
  <p><a href="{APP}/settings">Settings</a></p>
  <p><a href="{APP}/logout">Logout</a></p>
</section>
