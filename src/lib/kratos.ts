import { KRATOS } from "$lib/config";

// -----------------------------------------------------------------------------
export interface Attributes {
  name: string;
  type: string;
  value?: string;
  disabled: boolean;
  required?: boolean;
}

// -----------------------------------------------------------------------------
export interface Label {
  id: number;
  type: string;
  text: string;
  context?: unknown;
}

// -----------------------------------------------------------------------------
export interface Message {
  id: number;
  type: string;
  text: string;
  context?: unknown;
}

// -----------------------------------------------------------------------------
export interface Meta {
  label?: Label;
}

// -----------------------------------------------------------------------------
export interface Node {
  type: string;
  group: string;
  attributes: Attributes;
  messages: Message[];
  meta: Meta;
}

// -----------------------------------------------------------------------------
export interface UI {
  action: string;
  method: string;
  messages?: Message[];
  nodes: Node[];
  "updated_at": string;
}

// -----------------------------------------------------------------------------
export interface Login {
  id: string;
  type: string;
  forced: boolean;
  ui: UI;
  "created_at": string;
  "expires_at": string;
  "issued_at": string;
  "updated_at": string;
  "request_url": string;
}

// -----------------------------------------------------------------------------
export function getFlowId() {
  const qs = new URLSearchParams(window.location.search);

  return qs.get("flow");
}

// -----------------------------------------------------------------------------
export async function isAuthenticated() {
  const url = `${KRATOS}/sessions/whoami`;
  const res = await fetch(url, {
    credentials: "include",
    headers: {
      "Accept": "application/json",
    },
    mode: "cors",
  });

  return (res.status === 200) ? true : false;
}

// -----------------------------------------------------------------------------
export async function getDataModels(flow: string, flowId: string) {
  const url = `${KRATOS}/self-service/${flow}/flows?id=${flowId}`;
  const res = await fetch(url, {
    credentials: "include",
    headers: {
      "Accept": "application/json",
    },
    mode: "cors",
  });

  return await res.json();
}

// -----------------------------------------------------------------------------
export function modelLogin(dm: Login) {
  return dm;
}
