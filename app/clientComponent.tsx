"use client";
import { useAuth, useAuthUser } from "@frontegg/nextjs"; //, useLoginWithRedirect
import { jwtDecode } from "jwt-decode";

import { AdminPortal } from "@frontegg/nextjs";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import SwitchTenantV2 from "./switchTenantV2";
import { idToNameMap } from "./tenants";

export const ClientComponent = () => {
  const { isAuthenticated } = useAuth();
  const user = useAuthUser(); //redirects by default to /account/login if user isn't found
  const router = useRouter();
  const [tenantIdToNameMap, setTenantIdToNameMap] = useState<
    Record<string, string>
  >({});

  useEffect(() => {
    function setTenants() {
      setTenantIdToNameMap(idToNameMap);
    }
    setTenants();
  }, []);

  const logout = useCallback(() => {
    router.replace("/account/logout");
  }, [router]);

  const decodedToken = useMemo(() => {
    if (isAuthenticated && user) {
      return JSON.stringify(jwtDecode(user.accessToken), null, 2);
    }
    return "no token";
  }, [user, isAuthenticated]);

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
          <div>Tenant (useAuth): {tenantIdToNameMap[user.tenantId]}</div>
          {/* <div>
            Decoded Token: <pre>{decodedToken}</pre>
          </div> */}
          <div>
            <button onClick={() => logout()}>Click to logout</button>
          </div>
          <div>
            <button onClick={() => AdminPortal.show()}>Settings</button>
          </div>
          <SwitchTenantV2 />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
