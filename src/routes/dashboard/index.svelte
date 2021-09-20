<script lang="ts">
import { getContext } from "svelte";
import { SECUREAPP } from "$lib/config";
import type { KratosIdentity } from "$lib/kratos-types";

let identity: KratosIdentity = getContext("identity");
</script>

<h2>dashboard</h2>
<p>Hello {identity.traits.name.first}</p>
<a href="{SECUREAPP}/auth/logout">Logout</a>
