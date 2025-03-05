import { getAppUserSession } from "@frontegg/nextjs/app";
import { idToNameMap as tenantIdToNameMap } from "./tenants";
import UserJwt from "./UserJwt";
import JwtComp from "./JwtComp";

export const ServerSession = async () => {
  const userSession = await getAppUserSession();
  const sessionTenant = tenantIdToNameMap[userSession?.tenantId] || "No Tenant";
  return (
    <div>
      <JwtComp serversideJwt={userSession} />
      <div>
        User tenant (Server Side):
        {sessionTenant}
      </div>
    </div>
  );
};
