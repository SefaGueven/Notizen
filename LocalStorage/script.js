let myData=['Banana','not Banana','Apple'];

function init() {

    getFromLocalStorage();
    render()
}

function savaData() {
    let inputRef = document.getElementById('data_input'); //wird ausgelesen .

        if(inputRef.value !=""){                            //Wenn es nicht leer ist wird es ausgelesen .
            myData.push(inputRef.value);                    // wird in "myData geschrieben"

        }
    
        saveToLocalStorage();                           // wird hier gesichert.

        render();
        inputRef.value ="";
    
}
function saveToLocalStorage() {
    localStorage.setItem("myData", JSON.stringify(myData));     // "stringify" wandelt ein Objekt oder Datenstruktur in einen Text im JSON-Format um.Stringify wandelt hier Array in String um.
    
}                                                                //setItem und getItem werden meistens beim Browser-Speicher verwendet.

function getFromLocalStorage() {                                    
    let myArr = JSON.parse(localStorage.getItem("myData"));       // "parse" wandelt den String wieder zurück ins Array.
   
   if (myArr){                                                  //Nur wenn etwas in myArr drin ist, mache den Code
    myData = myArr;
}
    
}

function render() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let index = 0; index < myData.length; index++) {
        contentRef.innerHTML += `<p>${myData[index]}</p>`
        
    }
    
}