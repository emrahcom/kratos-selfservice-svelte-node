<script lang="ts">
  import type { Node } from "$lib/kratos/types";

  export let node: Node;

  const attr = node.attributes;
  let labelText: string;

  labelText = "Submit";
  if (node.meta && node.meta.label) labelText = node.meta.label.text;
</script>

<!-- -------------------------------------------------------------------------->
<button type="submit" name={attr.name} value={attr.value}>
  {labelText}
</button>
