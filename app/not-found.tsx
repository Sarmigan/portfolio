import { Typewriter } from "nextjs-simple-typewriter"

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
        <span className="font-fira-code text-2xl xl:text-6xl">
        <Typewriter
            words={["not found"]}
            loop={1}
            cursor={true}
            cursorStyle='_'
            cursorBlinking={true}
        />
        </span>
    </div>
  )
}