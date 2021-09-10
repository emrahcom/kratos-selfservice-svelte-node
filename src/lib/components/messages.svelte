<script lang="ts">
import type { Message } from "$lib/kratos";

export let messages: Message[];
</script>

{#if messages}
<div class="message">{messages}</div>
{/if}
