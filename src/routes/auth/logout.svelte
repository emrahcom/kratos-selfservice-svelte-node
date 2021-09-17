<script lang="ts" context="module">
import { LoadOutput } from "$lib/custom-types";
import { getLogoutData } from "$lib/kratos";

export async function load(): LoadOutput {
  const dm = await getLogoutData();

  if (dm.instanceOf === "KratosLogout") {
    return {
      status: 302,
      redirect: `${dm.logout_url}`,
    };
  } else {
    console.log(dm);
    return {};
  }
}
</script>

<p>something went wrong</p>
