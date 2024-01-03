import jwt from "jsonwebtoken";
import { jwtSecret } from ".";

type setProps = {
  id: string;
  email: string;
  name: string;
  username: string;
};

const set = (userInfo: setProps) => {
  return jwt.sign(userInfo, jwtSecret);
};
const verify = (token: string) => {
  return jwt.verify(token, jwtSecret);
};

export const userJwt = { set, verify };
