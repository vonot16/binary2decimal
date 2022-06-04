window.onload = () =>{
    [binaryInput, decimalInput] = document.getElementsByTagName('input')
    binaryInput.addEventListener('keydown',binaryChangeHandler)
}

function binaryChangeHandler(e){
    if(parseInt(e.key)!=1 && parseInt(e.key)!=0 && e.key!="Enter")
        setTimeout(() => {cancelInputChange(e.key)},20)
    else if(e.key=="Enter")
        console.log("send")
}

function cancelInputChange(key){
    binaryInput.value = binaryInput.value.replace(key,"")
}