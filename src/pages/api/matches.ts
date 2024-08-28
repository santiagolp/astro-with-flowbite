import type { APIRoute } from "astro"


export const GET: APIRoute = async ({ params, request }) => {

  const url = new URL(request.url);
  const queryParams = url.searchParams;

  const name = queryParams.get("name");
  const tag = queryParams.get("tag");
  const region = 'latam'
  const platform = 'pc'
 
  const response = await fetch(
    `https://api.henrikdev.xyz/valorant/v4/matches/${region}/${platform}/${name}/${tag}`,
    {
      method: "GET",
      headers: {
        Authorization: "HDEV-d1157ef0-cd44-4585-8fe4-5bc5eef91250",
        "Content-Type": "application/json",
      },
    },
  );

  const data = await response.json();

  return new Response(JSON.stringify(data));
}
