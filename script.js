let btn1 = document.getElementById('myButton');
let btn2 = document.getElementById('myButton2');
let copyDiv = document.getElementById('copy-code');
let rgb1 = "#0000ef";
let rgb2 = "#ee6269";



const hexValues = () => {
    let myHexavalue = "0123456789abcdef";
    let color = '#'
    for(let i = 0; i < 6; i++){
        let randomNumber = Math.floor(Math.random() * myHexavalue.length);
        color += myHexavalue[randomNumber];
    }
    return color;
}
const handleButton1 = () => {
    rgb1 = hexValues();
    console.log(rgb1);
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1},${rgb2});`
}


const handleButton2 = () => {
    rgb2 = hexValues();
    console.log(rgb2);
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`
}
btn1.addEventListener('click',handleButton1);
btn2.addEventListener('click',handleButton2);