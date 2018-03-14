console.log("Starting app.js");

const fs= require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes=require('./notes.js');

const argv=yargs.argv;
var command = argv._[0];
console.log('Command: ',command);
console.log('Process',process.argv);
console.log('Yargs',argv);

if(command === 'add'){
    console.log("Add");
    notes.addNote(argv.title,argv.body);
}
else if(command === 'list'){
    console.log("Listing notes");
    notes.getAll();
}
else if(command === 'read'){
    console.log("Reading");
    notes.getNote(argv.title);
}
else if(command === 'remove'){
    console.log("Remove");
    notes.removeNote(argv.title);
}
else{
    console.log("Command not recognized");
}