const fs = require("fs");

fs.writeFile("message.txt", "Hello from Henney!", (err) => {
    if (err) throw err;
    console.log("File saved!"); 
}); 