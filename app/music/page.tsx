import Script from "next/script";

export default async function Page() {
    const res = await fetch(`http://localhost:3000/api/spotify/topartists`)

    const data = await res.json()

    return (
        <div>
            <div className="flex flex-col justify-center items-center h-20">
                <span id="music_typewriter" className="text-lg font-fira-code text-center"></span>
                <Script src="/typewriter.js" strategy="afterInteractive"></Script>
            </div>
            <div className="flex flex-col justify-center items-center">
                {data.data.items.map((artist: any, index: any) => (
                    <div className="m-12 flex-col flex items-center justify-center hover:scale-110 duration-200">
                        <img className="max-w-48 rounded shadow-2xl" src={artist.images[0].url}></img>
                        <p className="font-fira-code text-xs mt-2">{index+1}. {artist.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}