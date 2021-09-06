import { KRATOS } from "$lib/config";

export function getFlowId() {
  const qs = new URLSearchParams(window.location.search);
  return qs.get("flow");
}

async function getDataModels(flow: string, flowId: string) {
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

export async function renderForm(flow: string, flowId: string) {
  const dm = await getDataModels(flow, flowId);

  return dm.ui.action
}
