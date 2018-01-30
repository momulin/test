console.log('Starting node.js');

// module.exports.addNote = (title,body) => {
//   console.log('adding notes',title,body);
// };
const fs =require('fs');

var fetchNotes = () =>{
  try {
    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

var addNote = function(title,body){
 var notes = fetchNotes();
 var note ={
   title,
   body
 };


var duplcateNotes = notes.filter((note) => note.title === title);

if(duplcateNotes.length === 0){
  notes.push(note);
  saveNotes(notes);
  return note;
}

};
var getAll = function(){
  console.log('getting all notes');
}
var removeNote = function(title){
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
}
var getNote = function(title,body){
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};
var logNote = (note) =>{
  console.log('-------------------');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}
module.exports = {
  addNote,
  getAll,
  removeNote,
  getNote,
  logNote
};
