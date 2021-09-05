<script lang="ts">
import render from "$lib/render.ts";

const rPromise = render("login");
</script>

<h1>login</h1>

{#await rPromise then form}
{form.ui.action}
{:catch err}
{err.message}
{/await}
