let words = []
let typewriter = null
let i = 0
let j = 0
let countdown = 0
let isDeleting = false
let isDeletable = true

function type(){
    if(countdown>0){
        countdown--

        setTimeout(type, 100)
    } else{
        if(isDeleting){
            if(j == 0){
                i = i == words.length-1 ? 0 : i+1;
                isDeleting = false
            } else{
                typewriter.textContent = words[i].substring(0, j)
                j--
            }
        } else{
            if(j == words[i].length+1){
                if(isDeletable){
                    countdown = 20
                    isDeleting = true
                } else{
                    return
                }
            } else{
                typewriter.textContent = words[i].substring(0, j)
                j++
            }
        }

        setTimeout(type, 100)
    }
}

if(document.getElementById("welcome_typewriter")){
    words = ["sarmigan sritharan", "welcome to my website!"]
    typewriter = document.getElementById("welcome_typewriter")
}
if(document.getElementById("music_typewriter")){
    words = ["artists ive been listening to recently"]
    typewriter = document.getElementById("music_typewriter")
    isDeletable = false
}

type()