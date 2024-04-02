import React from 'react'
import { Typewriter } from 'nextjs-simple-typewriter'
import Link from 'next/link'

export default function Page() {
  return(
    <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center h-16 md:h-20">
            <span className="text-2xl md:text-5xl font-fira-code text-center">
            <Typewriter
                words={["projects"]}
                loop={1}
                cursor={true}
                cursorStyle='_'
                cursorBlinking={true}
            />
            </span>
        </div>
        <div className="w-[240px] md:w-[720px]">
            <div className="my-6">
                <Link target="_blank" href="https://github.com/Sarmigan/HEAPML" className="text-[11px] md:text-lg font-fira-code hover:underline">heapml</Link>
                <p className="text-[11px] md:text-lg font-fira-code">a final year beng project that predicts phase formations of high entropy alloys using machine learning models</p>
            </div>
            <div className="my-6">
                <Link target="_blank" href="https://github.com/Sarmigan/rvc-api" className="text-[11px] md:text-lg font-fira-code hover:underline">rvc-api</Link>
                <p className="text-[11px] md:text-lg font-fira-code">a fork of the sovits rvc project</p>
            </div>
            <div className="my-6">
                <Link target="_blank" href="https://github.com/Sarmigan/portfolio" className="text-[11px] md:text-lg font-fira-code hover:underline">portfolio</Link>
                <p className="text-[11px] md:text-lg font-fira-code">this website! built using nextjs</p>
            </div>
        </div>
    </div>
  )
}