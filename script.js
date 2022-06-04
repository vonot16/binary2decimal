window.onload = () =>{
    [binaryInput, decimalInput] = document.getElementsByTagName('input')
    const convertButton = document.getElementsByTagName('button')[0]
    binaryInput.addEventListener('keydown',binaryChangeHandler)
    convertButton.addEventListener('click',convert)
}

function binaryChangeHandler(e){
    if(parseInt(e.key)!=1 && parseInt(e.key)!=0 && e.key!="Enter")
        setTimeout(() => {cancelInputChange(e.key)},20)
    else if(e.key=="Enter")
        convert()
}

function cancelInputChange(key){
    binaryInput.value = binaryInput.value.replace(key,"")
}

function convert(){
    let binary = [...binaryInput.value]
    console.log(binary)
}