
// notizen anzeigen lassen

let notes =[ 'Banana', 'Rasen'];
// --> wann werden Sie angezeigt?
   
function renderNotes(){
 //   defineren wo sie angezeigen sind

  let contentRef = document.getElementById('content')
    contentRef.innerHTML = "" ;
  for (let indexNote = 0; indexNote < notes.length; indexNote++) {

      contentRef.innerHTML += getnoteTemplate(indexNote);
  }
}

function getnoteTemplate(indexNote) {
    return `<p>- ${notes[indexNote]}<button onclick="deleteNote(${indexNote})">X</button></p>`;
}

// notizen hinzufügen

function addNote(){
  let noteInputRef = document.getElementById('note_input') ;
  let noteInput = noteInputRef.value;                       //eingabe auslesen


notes.push(noteInput);                                    //eingabe denn Notizen hinzufügen 

renderNotes();                        // eingabe anzeigen lassen

noteInputRef.value = "";


}
// notizen löschen

function deleteNote(indexNote) {
  notes.splice(indexNote, 1,);
  renderNotes();
}
// notizen archivieren
