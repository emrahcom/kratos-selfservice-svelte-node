<script lang="ts">
  import { APP } from "$lib/config";
  import identity from "$lib/stores/kratos/identity";
</script>

<!-- -------------------------------------------------------------------------->
<h2>Dashboard</h2>
<p>Hello {$identity.traits.email}</p>
<a href="{APP}/settings">Settings</a>
<a href="{APP}/logout">Logout</a>
