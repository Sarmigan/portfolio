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

export default function Artist(props: { item: Item, index: number, setArtist: (artist: string | null | undefined) => void }){
    return(
        <div key={props.index} className="flex hover:scale-110 duration-200" onMouseLeave={()=>props.setArtist(null)} onMouseOver={()=>props.setArtist(props.item.name)}>
            <img
                key={`img-${props.index}`}
                className="w-8 xl:w-16 rounded shadow-lg"
                src={props.item.images[0].url}
                alt={props.item.name}
            />
        </div>
    )
}