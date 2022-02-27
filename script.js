
let color = "#8e44ad"
let colorMode = "Triad"
let number = 1


fetch(`https://www.thecolorapi.com/scheme?hex=${color.slice(1)}&mode=${colorMode.toLowerCase()}`)
.then(res => res.json())
.then(data => data.colors
    .map(function(color){
    document.querySelector(`.color-${number}`).style.background = `${color.hex.value}`
    document.querySelector(`.color-code-${number}`).textContent = `${color.hex.value}`
    number++
})
)

document.querySelector(".container-up input").addEventListener("change",function(){
color =document.querySelector(".container-up input").value
number = 1
})
document.querySelector(".get-colors").addEventListener("click",function(){

fetch(`https://www.thecolorapi.com/scheme?hex=${color.slice(1)}&mode=${colorMode.toLowerCase()}`)
.then(res => res.json())
.then(data => data.colors
    .map(function(color){
    document.querySelector(`.color-${number}`).style.background = `${color.hex.value}`
    document.querySelector(`.color-${number}`).textContent = `c o p y`
    document.querySelector(`.color-${number}`).style.color = `black`
    document.querySelector(`.color-code-${number}`).textContent = `${color.hex.value}`
    number++
}))



})
function myFunction(event) {
    if(event.currentTarget.className.includes("color-code")){
        let copyText = event.currentTarget
        navigator.clipboard.writeText(copyText.textContent);
        
        if(event.currentTarget.className.includes("color-code-1")){
            copyText.textContent ="c o p i e d !"
            document.querySelector(".color-1").textContent="c o p i e d !"
        }
        if(event.currentTarget.className.includes("color-code-2")){
            copyText.textContent ="c o p i e d !"
            document.querySelector(".color-2").textContent="c o p i e d !"
        }
        if(event.currentTarget.className.includes("color-code-3")){
            copyText.textContent ="c o p i e d !"
            document.querySelector(".color-3").textContent="c o p i e d !"
        }
        if(event.currentTarget.className.includes("color-code-4")){
            copyText.textContent ="c o p i e d !"
            document.querySelector(".color-4").textContent="c o p i e d !"
        }
        if(event.currentTarget.className.includes("color-code-5")){
            copyText.textContent ="c o p i e d !"
            document.querySelector(".color-5").textContent="c o p i e d !"
        }
    }
    else{
        let copyText = event.currentTarget
        navigator.clipboard.writeText(copyText.style.backgroundColor);
        copyText.style.color ="white"
        if(event.currentTarget.className.includes("color-1")){
            copyText.textContent ="c o p i e d !"
            document.querySelector(".color-code-1").textContent="c o p i e d !"
        }
        if(event.currentTarget.className.includes("color-2")){
            copyText.textContent ="c o p i e d !"
            document.querySelector(".color-code-2").textContent="c o p i e d !"
        }
        if(event.currentTarget.className.includes("color-3")){
            copyText.textContent ="c o p i e d !"
            document.querySelector(".color-code-3").textContent="c o p i e d !"
        }
        if(event.currentTarget.className.includes("color-4")){
            copyText.textContent ="c o p i e d !"
            document.querySelector(".color-code-4").textContent="c o p i e d !"
        }
        if(event.currentTarget.className.includes("color-5")){
            copyText.textContent ="c o p i e d !"
            document.querySelector(".color-code-5").textContent="c o p i e d !"
        }
    }
    }
let togglemode = false
function modeChooice(event){
    number = 1
    if(!togglemode){
        document.querySelector(".mode-Monochrome").classList.remove("hidden")
        document.querySelector(".mode-Monochrome-dark").classList.remove("hidden")
        document.querySelector(".mode-Monochrome-light").classList.remove("hidden")
        document.querySelector(".mode-Analogic").classList.remove("hidden")
        document.querySelector(".mode-Complement").classList.remove("hidden")
        document.querySelector(".mode-Analogic-complement").classList.remove("hidden")
        document.querySelector(".mode-Triad ").classList.remove("hidden")
        document.querySelector(".mode-select").classList.remove("hidden")
    
    }else{
        document.querySelector(".mode-Monochrome").classList.add("hidden")
        document.querySelector(".mode-Monochrome-dark").classList.add("hidden")
        document.querySelector(".mode-Monochrome-light").classList.add("hidden")
        document.querySelector(".mode-Analogic").classList.add("hidden")
        document.querySelector(".mode-Complement").classList.add("hidden")
        document.querySelector(".mode-Analogic-complement").classList.add("hidden")
        document.querySelector(".mode-Triad ").classList.add("hidden")
        document.querySelector(".mode-select").classList.add("hidden")
    
    }
    document.querySelector(".mode-default span").textContent =event.currentTarget.textContent
    colorMode = event.target.innerText
    togglemode =!togglemode
}
function checkmark(event){{
    [...document.querySelectorAll(".mode-select img")].map(function(each){
        each.classList.add("hidden")
    })
    event.currentTarget.childNodes[3].className =""
    
}

}


let istoggleLight = false
let all =[ ...document.querySelectorAll(".color-code")]
function toggleLight(){
    istoggleLight = !istoggleLight
    if(istoggleLight){
        document.body.style.backgroundColor="#212121"
        document.body.style.color="white"
        document.querySelector(".light-toggle").style.backgroundColor="yellow"
        //ask why this doesnt work on stackoverflow *************************************************************************
        
        all.map(function(each){
            each.style.color="black"
        })
        
    }else{
        document.body.style.backgroundColor="#fff"
        document.body.style.color="black"
        document.querySelector(".light-toggle").style.backgroundColor="#6c5ce7"
    }
    
}




