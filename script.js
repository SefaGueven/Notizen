
// notizen anzeigen lassen
let notesTitles =[ 'Frucht', 'Arbeit'];
let notes =[ 'Banana', 'Rasen'];

let trashNotes = [];
let notesTitleTrash = [];

let archivNotesTitles = [];
let archivNotes = [];

let allNotes={

  'notesTitles' :[ 'Frucht', 'Arbeit'],
  'notes' :[ 'Banana', 'Rasen'],
  'archivNotesTitles':[],
  'archivNotes' : [],
  'notesTitleTrash' : [],
  'trashNotes':[]

}


function moveNote(indexNote,startKey,destinationKey){

   let note = allNotes[startKey].splice(indexNote,1);
   allNotes[destinationKey].push(note[0]);


    let notesTitle = allNotes[startKey+"Titles"].splice(indexNote,1);
     allNotes[destinationKey+"Titles"].push(notesTitle[0]);




    renderNotes();
    renderArchivNotes();
    renderTrashNotes();

}



function renderNotes(){

  let contentRef = document.getElementById('content')
    contentRef.innerHTML = "" ;

  for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
      contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

function renderArchivNotes(){
  let archivContentRef = document.getElementById('archiv_content')
  archivContentRef.innerHTML = "";

  for (let indexArchivNote = 0; indexArchivNote < allNotes.archivNotes.length; indexArchivNote++) {
    archivContentRef.innerHTML += getArchivNoteTemplate(indexArchivNote);
    
  }
}

function renderTrashNotes(){
  let trashContentRef = document.getElementById('trash_content')
    trashContentRef.innerHTML = "" ;

  for (let indexTrashNote = 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++) {
      trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
  }
}

 // notizen hinzufügen
function addNote(){                                                
  let noteInputRef = document.getElementById('note_input') ;
  let noteTitleInputRef = document.getElementById('note_input_title') ;

  let noteInput = noteInputRef.value;                               //eingabe auslesen
  let noteTitle = noteTitleInputRef.value;

  if (noteInput == ""|| noteTitle == "") {
    return
  }

notes.push(noteInput);     
notesTitles.push(noteTitle);                                        //eingabe Notizen hinzufügen 

saveToLocalStorage();

renderNotes(); 
                                                   // eingabe anzeigen lassen
noteTitleInputRef.value = "";
noteInputRef.value = "";

}


function deleteNote(indexTrashNote) {
  allNotes.trashNotes.splice(indexTrashNote, 1,);
  allNotes.trashNotesTitle.splice(indexTrashNote, 1,);
  
  renderNotes();
  renderTrashNotes();
}