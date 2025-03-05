export async function fetchTenants() {
  const token = await getToken();

  const response = await fetch(
    "https://api.frontegg.com/tenants/resources/tenants/v2",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    alert("error fetching tenant data");
  }

  const data = await response.json();

  return data;
}

export async function getToken() {
  const options = {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify({
      clientId,
      secret,
    }),
  };

  const response = await fetch(
    "https://api.frontegg.com/auth/vendor/",
    options
  );
  const data = await response.json();
  return data.token;
}
