"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeSwitcher() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
        return null
    }

    return(
        <div className="flex float-left justify-center items-center m-4 w-7 h-7 bg-white dark:bg-dark-background bg-opacity-85 dark:bg-opacity-85 hover:scale-125">
            {theme === "dark" ? <div className="w-2 md:w-2 h-2 md:h-2 bg-white rounded-full cursor-pointer" onClick={() => setTheme("light")}></div> : <div className="w-2 md:w-2 h-2 md:h-2 bg-dark-background rounded-full cursor-pointer" onClick={() => setTheme("dark")}></div>}
            
        </div>
    )
}


