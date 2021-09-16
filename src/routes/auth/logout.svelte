<script lang="ts" context="module">
import { getLogoutData, modelLogout } from "$lib/kratos";

export async function load() {
  const dm = await getLogoutData()
    .then((dm) => modelLogout(dm));

  if (dm.instanceOf === "Logout") {
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
