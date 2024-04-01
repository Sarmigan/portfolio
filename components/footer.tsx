import React from 'react'
import ThemeSwitcher from './theme-switcher'
import Menu from './menu'

export default function Footer() {
    return (
        <div className="flex flex-row flex-grow fixed bottom-0 left-0 w-screen justify-between items-end max-h-16">
            <ThemeSwitcher></ThemeSwitcher>
            <Menu></Menu>
        </div>
    )
}