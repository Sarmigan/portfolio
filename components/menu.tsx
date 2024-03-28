'use client'
import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Accordion from '@radix-ui/react-accordion';
import Link from "next/link";

export default function Menu() {
    let [open, setOpen] = useState(false)

    return (
        <div className='flex flex-row-reverse justify-center items-center fixed bottom-0 right-0'>
            <button className='items-center outline-none text-xl xl:text-xl font-fira-code m-4 ml-0 xl:m-7 xl:ml-0 w-7 xl:w-10 h-7 xl:h-10' onClick={(e)=>{setOpen(!open)}}>{open ? "-": "+"}</button>
            <AnimatePresence>
                {open && (
                        <div className="flex flex-row-reverse">
                            <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.025 }} exit={{ y: 100, opacity: 0 }}>
                                <Link className="text-xs xl:text-lg font-fira-code mx-2 hover:underline" href="/">home</Link>
                            </motion.div>
                            <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 }} exit={{ y: 100, opacity: 0 }}>
                                <Link className="text-xs xl:text-lg font-fira-code mx-2 hover:underline" href="/about">about</Link>
                            </motion.div>
                            <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.075 }} exit={{ y: 100, opacity: 0 }}>
                                <Link className="text-xs xl:text-lg font-fira-code mx-2 hover:underline" href="/education">education</Link>
                            </motion.div>
                            <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} exit={{ y: 100, opacity: 0 }}>
                                <Link className="text-xs xl:text-lg font-fira-code mx-2 hover:underline" href="/experience">experience</Link>
                            </motion.div>
                            <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.125 }} exit={{ y: 100, opacity: 0 }}>
                                <Link className="text-xs xl:text-lg font-fira-code mx-2 hover:underline" href="/certifications">certifications</Link>
                            </motion.div>
                        </div>
                )}
            </AnimatePresence>
        </div>
  )
}


