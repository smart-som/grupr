import { useAuth } from "../context/AuthContext";

export const checkAuth = () => {
  const { user } = useAuth();
  if (user) {
    return true;
  }
  return false;
};
