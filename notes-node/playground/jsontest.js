/*var obj = {
    name: 'Gabriel'
};
var stringObj=JSON.stringify(obj);
console.log(typeof(stringObj));
console.log(stringObj);
var personString = '{"name":"Gabriel", "age":25}';
console.log(JSON.parse(personString));*/

const fs=require("fs");

var originalNote={
    title: "some title",
    body: "some body"
};
originalNoteString= JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString)

var noteString=fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof(note));
console.log(note.title);