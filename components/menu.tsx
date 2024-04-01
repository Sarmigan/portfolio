'use client'
import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Accordion from '@radix-ui/react-accordion';
import Link from "next/link";

export default function Menu() {
    let [open, setOpen] = useState(false)

    return (
        <div className='flex flex-col-reverse items-end'>
            <button className='items-center outline-none text-xl font-fira-code font-bold m-4 mt-0 h-7 w-7' onClick={(e)=>{setOpen(!open)}}>{open ? "-": "+"}</button>
            <AnimatePresence>
                {open && (
                        <motion.div className="flex flex-col justify-end items-end my-2 mx-2">
                            <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.125 }} exit={{ x: 100, opacity: 0 }}>
                                <Link onClick={(e)=>{setOpen(!open)}} className="text-xs xl:text-lg font-fira-code px-2 hover:underline" href="/certifications">certifications</Link>
                            </motion.div>
                            <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }} exit={{ x: 100, opacity: 0 }}>
                                <Link onClick={(e)=>{setOpen(!open)}} className="text-xs xl:text-lg font-fira-code px-2 hover:underline" href="/experience">experience</Link>
                            </motion.div>
                            <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.075 }} exit={{ x: 100, opacity: 0 }}>
                                <Link onClick={(e)=>{setOpen(!open)}} className="text-xs xl:text-lg font-fira-code px-2 hover:underline" href="/education">education</Link>
                            </motion.div>
                            <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.05 }} exit={{ x: 100, opacity: 0 }}>
                                <Link onClick={(e)=>{setOpen(!open)}} className="text-xs xl:text-lg font-fira-code px-2 hover:underline" href="/about">about</Link>
                            </motion.div>
                            <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.025 }} exit={{ x: 100, opacity: 0 }}>
                                <Link onClick={(e)=>{setOpen(!open)}} className="text-xs xl:text-lg font-fira-code px-2 hover:underline" href="/">home</Link>
                            </motion.div>
                        </motion.div>
                )}
            </AnimatePresence>
        </div>
  )
}


