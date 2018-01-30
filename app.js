console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
const notes = require('./notes.js');
var command = argv._[0];
// console.log('Command:',command);
//console.log('yarg:',argv);
//console.log('Command:',process.argv);


if(command === 'add'){
  var note = notes.addNote(argv.title,argv.body);
  console.log(note);
  if(note){
    console.log('note created');
    notes.logNote(note);
  }else{
    console.log('note title taken');
  }
}else if(command === 'list') {
  notes.getAll();
}else if(command === 'read') {
  var note = notes.getNote(argv.title);
  if(note){
    console.log('note found');
    notes.logNote(note);
  }else{
    console.log('note not found');
  }
}else if(command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
}else{
  console.log('Command not recognize');
}
