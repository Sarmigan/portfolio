import ArtistBox from "@/components/artist-box";
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
      }),
      next: { revalidate: 3600 },
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
        next: { revalidate: 3600 },
    });

    data = await res.json()

    return Response.json({ data })
}

export default async function Page() {
    const res = await getTopArtists()
    const data = await res.json()
    const age = Math.abs(new Date(Date.now() - new Date(2001, 11, 8).getTime()).getUTCFullYear() - 1970)

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center h-16 xl:h-20">
                <span className="text-2xl xl:text-5xl font-fira-code text-center">
                <Typewriter
                    words={["about"]}
                    loop={1}
                    cursor={true}
                    cursorStyle='_'
                    cursorBlinking={true}
                />
                </span>
            </div>
            <div className="my-6 w-[240px] xl:w-[720px]">
                <p className="text-[11px] xl:text-lg font-fira-code">
                    hi, i&apos;m sarmigan! i am a {age} year old who enjoys everything computing related: programming, artificial intelligence, networking, cybersecurity, cloud engineering, etc. i also enjoy making music in my free time!
                </p>
            </div>
            <div className="my-6 w-[240px] xl:w-[720px]">
                <p className="text-[11px] xl:text-lg font-fira-code">my favourite artists of the month:</p>
                <div className="mt-5 xl:ml-0">
                    <ArtistBox data={data.data}></ArtistBox>
                </div>
            </div>
        </div>
    );
}