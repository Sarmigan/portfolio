import Script from "next/script";

export default function Home(){
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="flex">
        <h1 id="welcome_typewriter" className="text-2xl xl:text-6xl font-bold font-fira-code"></h1><span className="border-b-2 xl:border-b-4 mx-2 xl:mx-4 w-3 xl:w-9 h-7 xl:h-14 border-black animate-caret"></span>
        <Script src="/typewriter.js" strategy="afterInteractive"></Script>
      </div>
      <div className="flex mt-5">
        <a className="font-fira-code text-xs xl:text-xl mx-2 xl:mx-4 hover:scale-110 hover:underline underline-offset-3" href="https://www.linkedin.com/in/sarmigan/">LinkedIn</a>
        <a className="font-fira-code text-xs xl:text-xl mx-2 xl:mx-4 hover:scale-110 hover:underline underline-offset-3" href="https://github.com/Sarmigan">GitHub</a>
      </div>
      <a className="absolute bottom-0 right-0 m-2 xl:m-5 font-fira-code text-lg xl:text-4xl font-bold hover:scale-125" href="/music">+</a>
    </div>
  );
}
