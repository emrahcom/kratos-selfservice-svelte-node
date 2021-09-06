import { KRATOS } from "$lib/config.ts";

export function getFlowId() {
  const qs = new URLSearchParams(window.location.search);
  return qs.get("flow");
}

async function getDataModels(flow, flowId) {
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

export async function render(flow, flowId) {
  const dm = await getDataModels(flow, flowId);

  return "rendered";
}
