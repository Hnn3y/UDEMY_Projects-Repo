# UDEMY_Projects-Repo

## Staring with the backend 

### 2.1
![Page Screenshot](/Images/Screenshot%20(156).png)

### 2.2
![Page Screenshot](/Images/Screenshot%20(157).png)

const fs = require("fs");
#### This line imports the built-in fs (File System) module in Node.js, which provides an API for interacting with the file system. This allows you to perform operations such as reading from and writing to files.


// fs.writeFile("message.txt", "Hello from Henney!", (err) => {
//     if (err) throw err;
//     console.log("File saved!");
// });
#### This block of code is currently commented out. If it were uncommented, it would use the fs.writeFile method to create a file named message.txt and write the string "Hello from Henney!" into it.
#### The callback function (err) => { ... } is executed after the file write operation completes. If an error occurs (err is not null), it throws the error.
#### If the operation is successful, it logs "File saved!" to the console.


fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});
#### This line uses the fs.readFile method to read the contents of the file message.txt.
#### The first argument is the path to the file ("./message.txt").
#### The second argument ("utf8") specifies the character encoding to use when reading the file. This ensures that the file is read as a UTF-8 encoded string.
#### The callback function (err, data) => { ... } is executed after the file read operation completes. If an error occurs (err is not null), it throws the error.
#### If the operation is successful, it logs the contents of the file (data) to the console.

#### The fs module is required to interact with the file system.
#### The commented fs.writeFile code would create a file named message.txt and write "Hello from Henney!" to it, logging "File saved!" upon success.
#### The fs.readFile code reads the contents of message.txt and logs it to the console. If any errors occur during reading, they are thrown as exceptions.

### 2.3 
![Page Screenshot](/Images/Screenshot%20(158).png)
## RESULTS
PS C:\Users\USER PC\UDEMY_Projects-Repo\2.3 NPM> node index.js
My name is Titaniumgrabber Centaur.
My name is Typhoonantelope Stag.
My name is Dogdevourer Fairy.
My name is Powercockatoo Llama.
My name is Stonedagger Crafter. 