import { baseUrl } from "@/helpers";

export async function $fetch<T>(url: string, option?: RequestInit) {
  const response = await fetch(baseUrl + url, option);
  return (await response.json()) as T;
}
