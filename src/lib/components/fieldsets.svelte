<script lang="ts">
import Messages from "$lib/components/messages.svelte";
import Hidden from "$lib/components/fieldset-hidden.svelte";
import Password from "$lib/components/fieldset-password.svelte";
import Text from "$lib/components/fieldset-text.svelte";
import Submit from "$lib/components/fieldset-submit.svelte";
import type { Node } from "$lib/kratos";

export let nodes: Node[];
</script>

{#each nodes.filter((n) => n.type === "input") as node}
  <Messages messages={node.messages}/>

  {#if node.attributes.type === "hidden"}
    <Hidden {node}/>
  {:else if node.attributes.type === "password"}
    <Password {node}/>
  {:else if node.attributes.type === "text"}
    <Text {node}/>
  {:else if node.attributes.type === "submit"}
    <Submit {node}/>
  {:else}
    unknown
  {/if}
{/each}
