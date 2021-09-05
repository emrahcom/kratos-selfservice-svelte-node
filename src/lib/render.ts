import { KRATOS } from "$lib/config.ts";

async function getDataModels(flow) {
  const qs = new URLSearchParams(window.location.search);
  const flowId = qs.get("flow");
  const url = `${KRATOS}/self-service/${flow}?flow=${flowId}`;

  const res = await fetch(url, {
    credentials: "include",
    headers: {
      "Accept": "application/json",
    },
    mode: "cors",
  });

  return await res.json();
}

export default function (flow) {
  return getDataModels(flow);
}
