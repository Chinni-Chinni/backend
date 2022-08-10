

const x =  require("fs");
// console.log(x);
// For reading the file
const { readFileSync,writeFileSync,appendFileSync,renameSync,rmSync} = require("fs");

console.log(readFileSync("test.txt").toString());

console.log(readFileSync("test.txt",{encoding : "utf-8"}));

// For writing the new text file

writeFileSync("written.txt","this is written file",{encoding : "utf-8"});

// For appending the content to the testfile

appendFileSync("test.txt", "this is the appending the file to the test file",{encoding : "utf-8"})

// Rename to the test.txt file

renameSync("written.txt","changepath.txt");

// For removing the path

rmSync("delete.txt")

// For list out the all paths

