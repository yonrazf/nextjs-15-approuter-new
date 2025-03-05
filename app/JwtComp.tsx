"use client";

import { useAuth } from "@frontegg/nextjs";
import UserJwt from "./UserJwt";
import { useMemo } from "react";
import { jwtDecode } from "jwt-decode";

export default function JwtComp({ serversideJwt }: { serversideJwt: any }) {
  const { isAuthenticated, user } = useAuth();

  const clientsideJwt = useMemo(() => {
    if (isAuthenticated && user) {
      return jwtDecode(user.accessToken);
    }
    return "no token";
  }, [user, isAuthenticated]);
  return (
    <div className="w-full flex justify-center">
      <div className="text-center">
        <h1>Server Side JWT</h1>
        <div className="text-left">
          <UserJwt jsonData={serversideJwt} />
        </div>
      </div>
      <div className="text-center">
        <h1>Client Side JWT</h1>
        <div className="text-left">
          <UserJwt jsonData={clientsideJwt} altTheme={true} />
        </div>
      </div>
    </div>
  );
}
