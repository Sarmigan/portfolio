import { Typewriter } from 'nextjs-simple-typewriter'

export default function Page(){
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center h-16 xl:h-20">
            <span className="text-2xl xl:text-5xl font-fira-code text-center">
            <Typewriter
                words={["experience"]}
                loop={1}
                cursor={true}
                cursorStyle='_'
                cursorBlinking={true}
            />
            </span>
        </div>
        <div className="w-[240px] xl:w-[720px]">
            <div className="my-6">
                <p className="text-[11px] xl:text-lg font-fira-code">[jan 2024 - present]</p>
                <a href="https://identitye2e.com/index.html" className="text-[11px] xl:text-lg font-fira-code hover:underline">identitye2e</a>
                <p className="text-[11px] xl:text-lg font-fira-code ml-5 xl:ml-10">working as a certified aws solutions architect and devops consultant for public sector departments.</p>
            </div>
            <div className="my-6">
                <p className="text-[11px] xl:text-lg font-fira-code">[may 2023]</p>
                <a href="https://www.jammable.com/" className="text-[11px] xl:text-lg font-fira-code hover:underline">jammable</a><span className="max-xl:hidden text-[11px] xl:text-lg font-fira-code"> (formerly known as voicifyai)</span>
                <p className="text-[11px] xl:text-lg font-fira-code ml-5 xl:ml-10">worked as a freelance backend developer and machine learning engineer. deployed scalable speech to speech synthesis models and integrated a rest api for training new models and inferencing existing models</p>
            </div>
            <div className="my-6">
                <p className="text-[11px] xl:text-lg font-fira-code">[feb 2023]</p>
                <a className="text-[11px] xl:text-lg font-fira-code">p&p sarees</a>
                <p className="text-[11px] xl:text-lg font-fira-code ml-5 xl:ml-10">worked as a freelance full-stack developer. led the development of a headless e-commerce website using next.js and integrating the shopify storefont api.</p>
            </div>
            <div className="my-6">
                <p className="text-[11px] xl:text-lg font-fira-code">[jun 2019 - sep 2021]</p>
                <a className="text-[11px] xl:text-lg font-fira-code">reyewb ltd</a>
                <p className="text-[11px] xl:text-lg font-fira-code ml-5 xl:ml-10">worked as a part time it systems assistant. developed a full-stack application using the mern stack for a loyalty card scheme. deployed and maintained the company website through aws. installed and maintained networking hardware.</p>
            </div>
        </div>
    </div>
  );
}
