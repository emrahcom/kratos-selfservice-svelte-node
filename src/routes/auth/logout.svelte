<script lang="ts" context="module">
import { getLogoutData, modelKratos } from "$lib/kratos";

export async function load() {
  const dm = await getLogoutData()
    .then((dm) => modelKratos(dm));

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
