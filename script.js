window.onload = () =>{
    [binaryInput, decimalInput] = document.getElementsByTagName('input')
    binaryInput.addEventListener('keydown',binaryChangeHandler)
}

function binaryChangeHandler(e){
    if(parseInt(e.key)==1 || parseInt(e.key)==0)
        console.log("Valid Number")
    else if(e.key=="Enter")
        console.log("send")
    else console.log("Invalid Number")
}