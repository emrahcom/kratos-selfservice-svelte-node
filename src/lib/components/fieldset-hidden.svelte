<script lang="ts">
import type { Node } from "$lib/kratos";

export let node: Node;

const attr = node.attributes;
</script>

<input type="hidden" name="{attr.name}" value="{attr.value || ""}">
