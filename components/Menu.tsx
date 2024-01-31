'use client';
import Link from 'next/link';
import { useState } from 'react';
 
export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(current => !current)

    return (
        <div className="fixed bottom-0 right-0 flex flex-col items-end justify-end p-4">
            {isOpen && 
                <div className="flex flex-col items-end justify-end">
                    <Link className="font-fira-code text-xs xl:text-xl hover:underline underline-offset-3" href="/listening">listening</Link>
                    <Link className="font-fira-code text-xs xl:text-xl hover:underline underline-offset-3" href="/">home</Link>
                </div>
            }
            <button onClick={toggleMenu} className="font-rubik text-lg xl:text-2xl cursor-pointer select-none">+</button>
        </div>
    )
}