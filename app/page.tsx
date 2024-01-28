import Script from "next/script";

export default function Home(){
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="flex">
        <h1 id="welcome_typewriter" className="text-2xl font-bold font-fira-code"></h1><span className="border-b-2 m-1 w-3 h-6 border-black animate-caret"></span>
        <Script src="/typewriter.js" strategy="afterInteractive"></Script>
      </div>
      <div className="flex mt-5">
        <a className="font-fira-code text-xs mx-2 hover:scale-110 hover:underline underline-offset-3" href="https://www.linkedin.com/in/sarmigan/">LinkedIn</a>
        <a className="font-fira-code text-xs mx-2 hover:scale-110 hover:underline underline-offset-3" href="https://github.com/Sarmigan">GitHub</a>
      </div>
      <a className="absolute bottom-0 right-0 m-2 font-fira-code text-lg font-bold" href="/music">+</a>
    </div>
  );
}
