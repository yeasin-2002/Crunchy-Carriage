import { cookies } from "next/headers";

const set = (value: string) => {
  return cookies().set("authToken", value);
};
const get = () => {
  return cookies().get("authToken");
};
const has = () => {
  return cookies().has("authToken");
};
const deletes = () => {
  return cookies().delete("authToken");
};

export const authCookies = { set, get, has, deletes };
