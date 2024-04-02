import Link from 'next/link'
import { Typewriter } from 'nextjs-simple-typewriter'

export default function Page(){
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center h-16 md:h-20">
            <span className="text-2xl md:text-5xl font-fira-code text-center">
            <Typewriter
                words={["experience"]}
                loop={1}
                cursor={true}
                cursorStyle='_'
                cursorBlinking={true}
            />
            </span>
        </div>
        <div className="w-[240px] md:w-[720px]">
            <div className="my-6">
                <p className="text-[11px] md:text-lg font-fira-code">[jan 2024 - present]</p>
                <Link target="_blank" href="https://identitye2e.com/index.html" className="text-[11px] md:text-lg font-fira-code hover:underline">identitye2e</Link>
                <p className="text-[11px] md:text-lg font-fira-code ml-5 md:ml-10">working as a certified aws solutions architect and devops consultant for public sector departments.</p>
            </div>
            <div className="my-6">
                <p className="text-[11px] md:text-lg font-fira-code">[may 2023]</p>
                <Link target="_blank" href="https://www.jammable.com/" className="text-[11px] md:text-lg font-fira-code hover:underline">jammable</Link><span className="max-md:hidden text-[11px] md:text-lg font-fira-code"> (formerly known as voicifyai)</span>
                <p className="text-[11px] md:text-lg font-fira-code ml-5 md:ml-10">worked as a freelance backend developer and machine learning engineer. deployed scalable speech to speech synthesis models and integrated a rest api for training new models and inferencing existing models</p>
            </div>
            <div className="my-6">
                <p className="text-[11px] md:text-lg font-fira-code">[feb 2023]</p>
                <p className="text-[11px] md:text-lg font-fira-code">p&p sarees</p>
                <p className="text-[11px] md:text-lg font-fira-code ml-5 md:ml-10">worked as a freelance full-stack developer. led the development of a headless e-commerce website using next.js and integrating the shopify storefont api.</p>
            </div>
            <div className="my-6">
                <p className="text-[11px] md:text-lg font-fira-code">[jun 2019 - sep 2021]</p>
                <p className="text-[11px] md:text-lg font-fira-code">reyewb ltd</p>
                <p className="text-[11px] md:text-lg font-fira-code ml-5 md:ml-10">worked as a part time it systems assistant. developed a full-stack application using the mern stack for a loyalty card scheme. deployed and maintained the company website through aws. installed and maintained networking hardware.</p>
            </div>
        </div>
    </div>
  );
}
