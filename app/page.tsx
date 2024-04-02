import Link from 'next/link';
import { Typewriter } from 'nextjs-simple-typewriter'

export default function Home(){
  return (
    <div className="flex flex-col h-screen items-center justify-center no-scrollbar">
      <div className="flex">
        <span className="font-fira-code text-2xl md:text-6xl">
          <Typewriter
            words={["sarmigan sritharan", "full-stack developer", "devops engineer"]}
            loop={0}
            cursor={true}
            cursorStyle='_'
            cursorBlinking={true}
          />
        </span>
      </div>
      <div className="flex mt-5">
        <Link target="_blank" className="font-fira-code text-xs md:text-xl mx-2 md:mx-4 hover:underline underline-offset-3" href="https://www.linkedin.com/in/sarmigan/">LinkedIn</Link>
        <Link target="_blank" className="font-fira-code text-xs md:text-xl mx-2 md:mx-4 hover:underline underline-offset-3" href="https://github.com/Sarmigan">GitHub</Link>
      </div>
    </div>
  );
}
