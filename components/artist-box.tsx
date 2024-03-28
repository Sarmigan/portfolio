'use client'
import React, { useState } from 'react'
import Artist from "./artist"

interface Data{
    items: Item[]
    total: number
    limit: number
    offset: number
    href: string
    next: string
    previous: string | null
} 

interface Item{
    external_urls: {
        spotify: string
    }
    followers: {
        href: string | null
        total: number
    }
    genres: string[]
    href: string
    id: string
    images: Image[]
    name: string
    popularity: number
    type: string
    uri: string
}

interface Image{
    height: number
    url: string
    width: number
}

export default function ArtistBox(props: {data: Data}){
    let [artist, setArtist] = useState<string | null>()

    console.log()

    return(
        <div className="flex flex-col">
            <div className="">
                <div className="grid grid-cols-5 xl:grid-cols-10 gap-1 xl:gap-1 justify-center items-center">
                    {props.data.items.map((item: Item, index: number) => (
                        Artist({item, index, setArtist})
                    ))}
                </div>
            </div>
            <p className="mx-5 text-[11px] xl:text-lg font-fira-code mt-5 text-center">{artist}</p>
        </div>
    )
}