export async function GET() {
    var res = await fetch("http://localhost:3000/api/spotify/token",{ 
        next: { revalidate: 3600 },
    });

    var data = await res.json()

    const access_token = data.data.access_token

    res = await fetch("https://api.spotify.com/v1/me/top/artists?" + new URLSearchParams({time_range: "short_term", limit: "50"}), { 
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    data = await res.json()

    return Response.json({ data })
}