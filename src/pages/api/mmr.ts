import type { APIRoute } from "astro"


export const GET: APIRoute = async ({ params, request }) => {

  const url = new URL(request.url);
  const queryParams = url.searchParams;

  const name = queryParams.get("name");
  const tag = queryParams.get("tag");
  const region = 'latam'
  const platform = 'pc'
 
  const response = await fetch(
    `https://api.henrikdev.xyz/valorant/v3/mmr/${region}/${platform}/${name}/${tag}`,
    {
      method: "GET",
      headers: {
        Authorization: import.meta.env.HENRIK_KEY,
        "Content-Type": "application/json",
      },
    },
  );

  const data = await response.json();

  return new Response(JSON.stringify(data));
}
