'use client'
import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from "next/link";

export default function Menu() {
    let [open, setOpen] = useState(false)

    return (
        <div className='flex flex-col justify-end text-center items-end fixed bottom-0 right-0'>
            <DropdownMenu.Root open={open} onOpenChange={setOpen}>
                <DropdownMenu.Trigger asChild>
                    <button className='items-center outline-none text-xl xl:text-xl font-fira-code m-4 xl:m-7 w-7 xl:w-10 h-7 xl:h-10'>
                    {open ? "-": "+"}
                    </button>
                </DropdownMenu.Trigger>

                <AnimatePresence>
                    {open && (
                        <DropdownMenu.Portal forceMount>
                            <DropdownMenu.Content className='mx-4 xl:mx-7 p-1 rounded-md bg-white dark:bg-dark-background' asChild>
                                <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.25 }} exit={{ x: 100, opacity: 0 }}>
                                    <DropdownMenu.Item className='flex justify-end items-end outline-none hover:underline font-fira-code'>
                                        <Link className="text-xs xl:text-lg text-end" href="/certifications">certifications</Link>
                                    </DropdownMenu.Item>

                                    <DropdownMenu.Item className='flex justify-end items-end outline-none hover:underline font-fira-code'>
                                        <Link className="text-xs xl:text-lg text-end" href="/experience">experience</Link>
                                    </DropdownMenu.Item>

                                    <DropdownMenu.Item className='flex justify-end items-end outline-none hover:underline font-fira-code'>
                                        <Link className="text-xs xl:text-lg text-end" href="/education">education</Link>
                                    </DropdownMenu.Item>
                                    
                                    <DropdownMenu.Item className='flex justify-end items-end outline-none hover:underline font-fira-code'>
                                        <Link className="text-xs xl:text-lg text-end" href="/about">about</Link>
                                    </DropdownMenu.Item>

                                    <DropdownMenu.Item className='flex justify-end items-end outline-none hover:underline font-fira-code'>
                                        <Link className="text-xs xl:text-lg text-end" href="/">home</Link>
                                    </DropdownMenu.Item>


                                </motion.div>
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    )}
                </AnimatePresence>
            </DropdownMenu.Root>
        </div>
  )
}


