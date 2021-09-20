<script lang="ts">
import { SECUREAPP } from "$lib/config";
import { getContext } from "svelte";

const firstName = getContext("firstName");
</script>

<h2>dashboard</h2>
<p>Hello {firstName}</p>
<a href="{SECUREAPP}/auth/logout">Logout</a>
