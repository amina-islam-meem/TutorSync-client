import { jwtClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
const getBaseURL = () => {
  if (typeof window === 'undefined') {
    return process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  }
  return window.location.origin;
};

export const authClient = createAuthClient({
  baseURL: getBaseURL(),
  plugins: [jwtClient()]
});