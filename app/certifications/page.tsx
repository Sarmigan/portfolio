import Link from 'next/link';
import { Typewriter } from 'nextjs-simple-typewriter'

export default function Page(){
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center h-16 md:h-20">
            <span className="text-2xl md:text-5xl font-fira-code text-center">
            <Typewriter
                words={["certifications"]}
                loop={1}
                cursor={true}
                cursorStyle='_'
                cursorBlinking={true}
            />
            </span>
        </div>
        <div className="my-6 w-[240px] md:w-[720px]">
            <div className="mt-6">
                <Link target="_blank" href="https://www.credly.com/badges/3bea13b0-86ff-4980-986a-2407b357c50c/public_url" className="text-[11px] md:text-lg font-fira-code hover:underline">aws certified solutions architecht - associate</Link>
                <p className="text-[11px] md:text-lg font-fira-code">[issued march 2024 - expires march 2027]</p>
            </div>
        </div>
    </div>
  );
}
