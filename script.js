
// notizen anzeigen lassen
let notesTitles =[ 'Frucht', 'Arbeit'];
let notes =[ 'Banana', 'Rasen'];

let trashNotes=[];
let notesTitleTrash=[];
// --> wann werden Sie angezeigt?
   
function renderNotes(){
 //   defineren wo sie angezeigen sind

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
function getPushTrashNoteTemplate(indexPushTrashNote) {
    return `<p>- ${trashNotes[indexPushTrashNote]}<button onclick="deleteNote(${indexPushTrashNote})">X</button></p>`;
}

// notizen hinzufügen

function addNote(){
  let noteInputRef = document.getElementById('note_input') ;
  let noteInput = noteInputRef.value;                       //eingabe auslesen


notes.push(noteInput);                                    //eingabe denn Notizen hinzufügen 

renderNotes();                                           // eingabe anzeigen lassen

noteInputRef.value = "";


}
// notizen löschen    // notizen archivieren

function pushToTrashNote(indexNote) {
  let trashNote = notes.splice(indexNote, 1,);
  trashNotes.push(trashNote);
  let notesTitleTrash= notesTitles.splice(indexNote, 1,);
  trashNotes.push(notesTitleTrash);
  renderNotes(); //Anzeigen/rendern von Notizen
  renderTrashNotes(); //Anzeigen/render von gelöschenen Notizen

}
function getPushTrashNoteTemplate(indexPushTrashNote) {
    return `<p>- ${trashNotes[indexPushTrashNote]}<button onclick="deleteNote(${indexPushTrashNote})">X</button></p>`;
}

function deleteNote(indexPushTrashNote) {
  trashNotes.splice(indexPushTrashNote, 1,);
  renderPushTrashNotes();
}
