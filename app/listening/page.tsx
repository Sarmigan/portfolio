import { Typewriter } from "nextjs-simple-typewriter";

async function getToken(){
    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
        client_id: process.env.SPOTIFY_CLIENT_ID
      })
    });

    const data = await res.json()
    
    return Response.json({ data })
}

async function getTopArtists() {
    var res = await getToken()
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

export default async function Page() {
    const res = await getTopArtists()
    const data = await res.json()

    return (
        <div>
            <div className="flex flex-col justify-center items-center h-20">
                <span id="music_typewriter" className="text-lg xl:text-4xl font-fira-code text-center"></span>
                <span className="text-lg xl:text-4xl font-fira-code text-center">
                <Typewriter
                    words={["artists i've been listening to"]}
                    loop={1}
                    cursor={true}
                    cursorStyle='_'
                    cursorBlinking={true}
                />
                </span>
            </div>
            <div className="flex flex-col justify-center items-center">
                {data.data.items.map((artist: any, index: any) => (
                    <div key={index} className="m-12 flex-col flex items-center justify-center duration-200">
                        <img
                            key={`img-${index}`} 
                            className="max-w-48 xl:max-w-72 rounded shadow-lg"
                            src={artist.images[0].url}
                            alt={artist.name}
                        />
                        <p key={`artist-${index}`}  className="font-fira-code text-xs xl:text-lg mt-2">{index+1}. {artist.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}