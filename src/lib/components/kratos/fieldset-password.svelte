<script lang="ts">
  import Messages from "$lib/components/kratos/messages.svelte";
  import PasswordToggle from "$lib/components/kratos/fieldset-password-toggle.svelte";
  import type { Node } from "$lib/kratos/types";

  export let node: Node;

  const attr = node.attributes;
  let isHidden = true;
  let labelText: string;

  labelText = attr.name;
  if (node.meta && node.meta.label) labelText = node.meta.label.text;
</script>

<!-- -------------------------------------------------------------------------->
<fieldset>
  <label>
    <span>{labelText}</span>
    <input
      type={isHidden ? "password" : "text"}
      name={attr.name}
      value={attr.value ?? ""}
      placeholder={labelText}
      disabled={attr.disabled}
      required={attr.required}
    />
    <PasswordToggle bind:isHidden />
  </label>
</fieldset>

<Messages messages={node.messages} />
