<script lang="ts">
import type { Node } from "$lib/kratos";

export let nodes: Node[];
</script>

{#each nodes.filter((n) => n.type === "input") as node}
  {node.attributes.name}
{/each}
