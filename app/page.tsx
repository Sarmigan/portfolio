import Menu from '@/components/menu';
import { Typewriter } from 'nextjs-simple-typewriter'

export default function Home(){
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="flex">
        <span className="font-fira-code text-2xl xl:text-6xl">
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
        <a className="font-fira-code text-xs xl:text-xl mx-2 xl:mx-4 hover:underline underline-offset-3" href="https://www.linkedin.com/in/sarmigan/">LinkedIn</a>
        <a className="font-fira-code text-xs xl:text-xl mx-2 xl:mx-4 hover:underline underline-offset-3" href="https://github.com/Sarmigan">GitHub</a>
      </div>
      <Menu/>
    </div>
  );
}
