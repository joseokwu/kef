import { useRouter } from "next/router";
import React, { useEffect } from "react";
import UseIsLoggedIn from "../../hooks/UseIsLoggedIn";

const AuthCheck = ({ children }) => {
  const isLoggedIn = UseIsLoggedIn();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/auth/sign-in");
    }
  }, []);

  return <>{children}</>;
};

export default AuthCheck;
