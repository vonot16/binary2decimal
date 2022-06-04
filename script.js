window.onload = () =>{
    [binaryInput, decimalInput] = document.getElementsByTagName('input')
    const convertButton = document.getElementsByTagName('button')[0]
    binaryInput.addEventListener('keydown',binaryChangeHandler)
    convertButton.addEventListener('click',convert)
}

function binaryChangeHandler(e){
    if(parseInt(e.key)!=1 && parseInt(e.key)!=0 && e.key!="Enter" && e.key!="Backspace")
        setTimeout(() => {cancelInputChange(e.key)},20)
    else setTimeout(()=>{convert()},2)
}

function cancelInputChange(key){
    binaryInput.value = binaryInput.value.replace(key,"")
}

function convert(){
    let binary = [...binaryInput.value].reverse()
    let decimal = 0;
    binary.forEach((number,power)=>{
        decimal += number*Math.pow(2,power)
    })
    decimalInput.value = decimal
}