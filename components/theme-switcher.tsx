'use client'
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
        <div className='flex float-left justify-center items-center m-4 w-7 h-7'>
            {theme === "dark" ? <div className="w-2 xl:w-2 h-2 xl:h-2 bg-white rounded-full cursor-pointer" onClick={() => setTheme('light')}></div> : <div className="w-2 xl:w-2 h-2 xl:h-2 bg-dark-background rounded-full cursor-pointer" onClick={() => setTheme('dark')}></div>}
            
        </div>
    )

    if(theme === "dark") {
        return(
            <div className='flex absolute bottom-0 left-0 justify-center items-center m-4 xl:m-7 w-7 xl:w-10 h-7 xl:h-10'>
                <div className="w-2 xl:w-2 h-2 xl:h-2 bg-white rounded-full cursor-pointer" onClick={() => setTheme('light')}></div>
            </div>
        )
    }

    if(theme === "light") {
        return(
            <div className='flex absolute bottom-0 left-0 justify-center items-center m-4 xl:m-7 w-7 xl:w-10 h-7 xl:h-10'>
            </div>
        )   
    }
}


