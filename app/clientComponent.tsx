"use client";
import { useAuth, useAuthUser } from "@frontegg/nextjs"; //, useLoginWithRedirect

import { AdminPortal } from "@frontegg/nextjs";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const ClientComponent = () => {
  const { isAuthenticated } = useAuth();
  const user = useAuthUser(); //redirects by default to /account/login if user isn't found
  const router = useRouter();

  const logout = useCallback(() => {
    router.replace("/account/logout");
  }, [router]);

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl ?? ""} alt={user?.name} />
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <button onClick={() => alert(user?.accessToken)}>
              What is my access token?
            </button>
          </div>
          <div>
            <button onClick={() => logout()}>Click to logout</button>
          </div>
          <div>
            <button onClick={() => AdminPortal.show()}>Settings</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
