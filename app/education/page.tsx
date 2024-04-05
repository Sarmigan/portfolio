import { Typewriter } from 'nextjs-simple-typewriter'

export default function Page(){
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center h-16 md:h-20">
            <span className="text-2xl md:text-5xl font-fira-code text-center">
            <Typewriter
                words={["education"]}
                loop={1}
                cursor={true}
                cursorStyle='_'
                cursorBlinking={true}
            />
            </span>
        </div>
        <div className="my-6 w-[240px] md:w-[720px]">
            <div className="my-6">
                <p className="text-[11px] md:text-lg font-fira-code">[2020 - 2023]</p>
                <p className="text-[11px] md:text-lg font-fira-code">university of nottingham</p>
                <p className="text-[11px] md:text-lg font-fira-code ml-5 md:ml-10">beng mechanical engineering</p>
            </div>
            <div className="my-6">
                <p className="text-[11px] md:text-lg font-fira-code">[2020 - 2023]</p>
                <p className="text-[11px] md:text-lg font-fira-code">sutton grammar school</p>
                <p className="text-[11px] md:text-lg font-fira-code ml-5 md:ml-10">a level</p>
                <p className="text-[11px] md:text-lg font-fira-code ml-10 md:ml-16">- maths</p>
                <p className="text-[11px] md:text-lg font-fira-code ml-10 md:ml-16">- further maths</p>
                <p className="text-[11px] md:text-lg font-fira-code ml-10 md:ml-16">- physics</p>
                <p className="text-[11px] md:text-lg font-fira-code ml-10 md:ml-16">- chemistry</p>
                <p className="text-[11px] md:text-lg font-fira-code ml-5 md:ml-10">gcse</p>
                <p className="text-[11px] md:text-lg font-fira-code ml-10 md:ml-16">- maths</p>
                <p className="text-[11px] md:text-lg font-fira-code ml-10 md:ml-16">- further maths</p>
                <p className="text-[11px] md:text-lg font-fira-code ml-10 md:ml-16">- english literature</p>
                <p className="text-[11px] md:text-lg font-fira-code ml-10 md:ml-16">- english language</p>
                <p className="text-[11px] md:text-lg font-fira-code ml-10 md:ml-16">- biology</p>
                <p className="text-[11px] md:text-lg font-fira-code ml-10 md:ml-16">- physics</p>
                <p className="text-[11px] md:text-lg font-fira-code ml-10 md:ml-16">- chemistry</p>
                <p className="text-[11px] md:text-lg font-fira-code ml-10 md:ml-16">- computer science</p>
                <p className="text-[11px] md:text-lg font-fira-code ml-10 md:ml-16">- geography</p>
                <p className="text-[11px] md:text-lg font-fira-code ml-10 md:ml-16">- german</p>
                <p className="text-[11px] md:text-lg font-fira-code ml-10 md:ml-16">- religous education</p>
                <p className="text-[11px] md:text-lg font-fira-code ml-10 md:ml-16">- music</p>
            </div>
        </div>
    </div>
  );
}
