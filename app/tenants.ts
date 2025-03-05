import { fetchTenants } from "./utils";

const tenants = await fetchTenants();
export const idToNameMap = tenants.items.reduce(
  (acc: Record<string, string>, obj: any) => {
    acc[obj.tenantId] = obj.name;
    return acc;
  },
  {}
);
