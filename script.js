
// notizen anzeigen lassen

let notes =[ 'Banana', 'Rasen'];
// --> wann werden Sie angezeigt?
   
function renderNotes(){
 //   defineren wo sie angezeigen sind

  let contentRef = document.getElementById('content')
    contentRef.innerHTML = "" ;
  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    const note= notes[indexNote];
      contentRef.innerHTML += getnoteTemplate(note);
  }
}

function getnoteTemplate(note) {
    return `<p>- ${note}</p>`;
}

// notizen hinzufügen

function addNote(){
  let noteInputRef = document.getElementById('note_input') ;
  let noteInput = noteInputRef.value;                       //eingabe auslesen


notes.push(noteInput);                                    //eingabe denn Notizen hinzufügen 

renderNotes();// eingabe anzeigen lassen

noteInputRef.value = "";



// notizen löschen
// notizen archivieren
}