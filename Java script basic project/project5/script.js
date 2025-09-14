//generate a random color

const randomColor=function(){
    let hex = '0123456789ABCDEF'  //number and letter combination possible for hexa code of color
    let color ="#"                //hex color code strats with #
    for(let i=0 ; i<6 ; i++){     //as hex colors has 5 letters in it
        color += hex[Math.floor(Math.random()*16)]    
    }
    console.log(color)
    return color
}

let interValid
const changeBgColor=function(){
    document.body.style.backgroundColor=randomColor()
}

const startChangingColor= function(){
    if(!interValid){                  //its also a good practice to check it will work without this also
    interValid=setInterval(changeBgColor,500)
    }
}

const stopChangingColor =function(){
    clearInterval(interValid)
    interValid=null //as we no longer want this so saving the space  //it will work without this but its a good practice
}

document.getElementById('start').addEventListener('click',startChangingColor)
document.getElementById('stop').addEventListener('click',stopChangingColor)