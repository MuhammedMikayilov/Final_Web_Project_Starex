import { Api } from "@plugins";

export async function settings(params) {
  return await Api.get("settings", params);
}

export async function translations(params) {
  return await Api.get("translations", params);
}
