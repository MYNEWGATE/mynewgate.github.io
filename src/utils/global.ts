import { parseJwt } from "./parseJWT";

export const extractUser = () => {
  const token = sessionStorage.getItem("token");
  if (token) {
    alert("Undefined token, return home page.");
    window.location.assign("/");
    return;
  }
  const user = parseJwt(token || "");

  return {
    info: user.data, //{name, age, birthday, etc...}
    permission: user.permit, //{isAdmin, isActive, accessApp}
    userControl: user.id, //{userId, controlId }
  };
};
