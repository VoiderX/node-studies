console.log("Starting app.js");

const fs= require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes=require('./notes.js');

const argv=yargs.argv;
var command = argv._[0];
/*console.log('Command: ',command);
console.log('Process',process.argv);
console.log('Yargs',argv);*/

if(command === 'add'){
    console.log("Add");
    var note=notes.addNote(argv.title,argv.body);
    if(!note){
        console.log("Duplicated title!");
    }else{
        console.log(`Added with success! Title: ${note.title} Body: ${note.body}`);
    }
}
else if(command === 'list'){
    var allNotes=notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach(element => {
        console.log(`Title: ${element.title}`);
        console.log(`Content: ${element.body}`);
    });
}
else if(command === 'read'){
    console.log("Reading");
    note=notes.getNote(argv.title);
    if(note.length>0){
        console.log(`Note body: ${note[0].body}`);
    }else{
        console.log("Note not found");
    }
}
else if(command === 'remove'){
    console.log("Remove");
    if(notes.removeNote(argv.title)){
        console.log("Note Removed");
    }else{
        console.log("Note not found");
    }
}
else{
    console.log("Command not recognized");
}