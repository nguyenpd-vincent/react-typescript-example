import { useEffect } from "react";
import { RootState } from "@/stores";
import { useAppDispatch } from "@/stores/hooks";
import { getToken } from "@/utils/auth";
import { decodeJwt } from "@/utils/jwt";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import dayjs from "dayjs";
import {
  actionAuthRefresh as storeActionAuthRefresh,
  actionGetSession,
} from "@/stores/auth/authAction";

function RequireAuth({ children }: { children: JSX.Element }) {
  const { isLogin } = useSelector((state: RootState) => state.auth);
  const location = useLocation();
  let ignore = false;

  const dispatch = useAppDispatch();
  useEffect(() => {
    const intervalRefresh = setInterval(() => {
      const token = getToken();
      if (token?.accessToken && token?.refreshToken) {
        const tokenDecode = decodeJwt<TOKEN.UserIdentity>(
          token?.accessToken ?? ""
        );
        const now = dayjs().subtract(1, "minute");

        if (tokenDecode && now.unix() > tokenDecode?.exp) {
          dispatch(storeActionAuthRefresh(token?.refreshToken ?? ""));
        }
      }
    }, 10000);
    return () => {
      clearInterval(intervalRefresh);
    };
  }, [dispatch]);

  useEffect(() => {
    if (!ignore) {
      dispatch(actionGetSession(""));
    }
    return () => {
      ignore = true;
    };
  }, []);

  if (!isLogin) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
}
export default RequireAuth;
