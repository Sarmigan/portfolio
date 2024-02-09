import Menu from "@/components/menu";
import { Typewriter } from "nextjs-simple-typewriter";

export default async function Page() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center h-20">
                <span id="music_typewriter" className="text-lg xl:text-4xl font-fira-code text-center"></span>
                <span className="text-lg xl:text-4xl font-fira-code text-center">
                <Typewriter
                    words={["music i've been working on"]}
                    loop={1}
                    cursor={true}
                    cursorStyle='_'
                    cursorBlinking={true}
                />
                </span>
            </div>
            <Menu/>
        </div>
    );
}