document.body.style.transition = "0.5s"
//Generating colours
const finalColorCode = () =>{
    var colorValues = "0123456789ABCDEF";
    var colorHex = "#";
    for(let i=0; i<6; i++){
        colorHex += colorValues[Math.floor(Math.random()*16)]
    }
    return colorHex
}
let intervalId;
//Now taking elements from DOM
const startColorChange = ()=>{
    intervalId = setInterval(()=>{
        document.body.style.backgroundColor = finalColorCode()
    }, 1000)
};
const stopColorChange = () =>{
    clearInterval(intervalId)
    colorHex = null
};




const startChange = document.getElementById('startColor').addEventListener('click', startColorChange)

const stopChange = document.getElementById('stopColor').addEventListener('click', stopColorChange)

// 


