let myData=['Banana','not Banana','Apple'];

function init() {
    getFromLocalStorage();
    render()
}

function savaData() {
    let inputRef = document.getElementById('data_input');

        if(inputRef.value !=""){
            myData.push(inputRef.value);

        }
    
        saveToLocalStorage();

        render();
        inputRef.value ="";
    
}
function saveToLocalStorage() {
    
}

function getFromLocalStorage() {
    
}
function render() {
    let contentRef =document.getElementById('content');
    contentRef.innerHTML="";

    for (let index = 0; index < myData.length; index++) {
        contentRef.innerHTML += `<p>${myData[index]}</p>`
        
    }
    
}