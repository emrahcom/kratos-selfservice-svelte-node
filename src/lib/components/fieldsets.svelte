<script lang="ts">
import Messages from "$lib/components/messages.svelte";
import type { Node } from "$lib/kratos";

export let nodes: Node[];
</script>

{#each nodes.filter((n) => n.type === "input") as node}
  <br/>

  <Messages messages={node.messages}/>

  {#if node.meta}
    meta -
    {node.meta.type}<br/>
    {#if node.meta.label}
      label -
      {node.meta.label.id} -
      {node.meta.label.type} -
      {node.meta.label.text} -
      {node.meta.label.context}<br/>
    {/if}
  {/if}

  {#if node.attributes}
    attributes -
    {node.attributes.name} -
    {node.attributes.type} -
    {node.attributes.value} -
    {node.attributes.disabled} -
    {node.attributes.required}<br/>
  {/if}
{/each}
