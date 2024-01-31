import Menu from "@/components/Menu";
import { Typewriter } from "nextjs-simple-typewriter";

export default async function Page() {
    const res = await fetch("http://localhost:3000/api/spotify/topartists", { next: { revalidate: 86400 } })
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
            <Menu/>
        </div>
    );
}