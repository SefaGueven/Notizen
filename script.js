
// notizen anzeigen lassen
let notesTitles =[ 'Frucht', 'Arbeit'];
let notes =[ 'Banana', 'Rasen'];

let trashNotes=[];
let notesTitleTrash=[];
// --> wann werden Sie angezeigt?
   
function renderNotes(){
 //   defineren wo sie angezeigen sind

   getFromLocalStorage();

  let contentRef = document.getElementById('content')
    contentRef.innerHTML = "" ;
  for (let indexNote = 0; indexNote < notes.length; indexNote++) {

      contentRef.innerHTML += getnoteTemplate(indexNote);
  }
}


function renderTrashNotes(){

  let trashContentRef = document.getElementById('trash_content')
    trashContentRef.innerHTML = "" ;
  for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {

      trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
  }
}

function renderPushTrashNotes(){

  let trashPushContentRef = document.getElementById('trash_content')
    trashPushContentRef.innerHTML = "" ;
  for (let indexPushTrashNote = 0; indexPushTrashNote < trashNotes.length; indexPushTrashNote++) {

      indexPushTrashNote.innerHTML += getPushTrashNoteTemplate(indexPushTrashNote);
  }
}


function getnoteTemplate(indexNote) {
    return `<p>- title: ${notesTitles[indexNote]} >>> ${notes[indexNote]} <button onclick="pushToTrashNote(${indexNote})">X</button></p>`;
}
function getTrashNoteTemplate(indexTrashNote) {
    return `<p>-title: ${notesTitleTrash[indexTrashNote]} >>> ${trashNotes[indexTrashNote]}<button onclick="deleteNote(${indexTrashNote})">X</button></p>`;
}




function addNote(){                                                 // notizen hinzufügen
  let noteInputRef = document.getElementById('note_input') ;
  let noteInput = noteInputRef.value;                               //eingabe auslesen


notes.push(noteInput);                                             //eingabe denn Notizen hinzufügen 

saveToLocalStorage();

renderNotes();                                                    // eingabe anzeigen lassen

noteInputRef.value = "";

}
function addNoteTitle(){                                                 // notizen hinzufügen
  let noteInputRef = document.getElementById('title_input') ;
  let noteInput = noteInputRef.value;                               //eingabe auslesen


notesTitles.push(noteInput);                                             //eingabe denn Notizen hinzufügen 

saveToLocalStorage();

renderNotes();                                                    // eingabe anzeigen lassen

noteInputRef.value = "";

}

function pushToTrashNote(indexNote) {                                 // notizen löschen    // notizen archivieren
  let trashNote = notes.splice(indexNote, 1,);
  trashNotes.push(trashNote[0]);
  
  let trashNotesTitle= notesTitles.splice(indexNote, 1,);
  notesTitleTrash.push(trashNotesTitle[0]);

  renderNotes();                                               //Anzeigen/rendern von Notizen
  renderTrashNotes();                                          //Anzeigen/render von gelöschenen Notizen

}
function deleteNote(indexPushTrashNote) {
  trashNotes.splice(indexPushTrashNote, 1,);
  renderNotes();
  renderPushTrashNotes();
}
function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));     // "stringify" wandelt ein Objekt oder Datenstruktur in einen Text im JSON-Format um.Stringify wandelt hier Array in String um.
    localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
}                              
function getFromLocalStorage() {                                    
    let myArr = JSON.parse(localStorage.getItem("notes"));       // "parse" wandelt den String wieder zurück ins Array.
   
   if (myArr){                                                  //Nur wenn etwas in myArr drin ist, mache den Code
    notes = myArr;
}
  }