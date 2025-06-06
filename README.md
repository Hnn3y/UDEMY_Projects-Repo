# UDEMY_Projects-Repo

## THIS IS FOR MY LEARNING AND TESTS AFTER LEARNING
### CHECK MY PROJECTS REPO FOR THE ACTUAL PROJECTS

## Staring with the backend 

### 2.1
![Page Screenshot](/Images/Screenshot%20(156).png)

### 2.2
![Page Screenshot](/Images/Screenshot%20(157).png)

#### const fs = require("fs");
This line imports the built-in fs (File System) module in Node.js, which provides an API for interacting with the file system. This allows you to perform operations such as reading from and writing to files.


#### // fs.writeFile("message.txt", "Hello from Henney!", (err) => {
#### //     if (err) throw err;
#### //     console.log("File saved!");
#### // });
 This block of code is currently commented out. If it were uncommented, it would use the fs.writeFile method to create a file named message.txt and write the string "Hello from Henney!" into it.
 The callback function (err) => { ... } is executed after the file write operation completes. If an error occurs (err is not null), it throws the error.
If the operation is successful, it logs "File saved!" to the console.


#### fs.readFile("./message.txt", "utf8", (err, data) => {
####    if (err) throw err;
####    console.log(data);
#### });
 This line uses the fs.readFile method to read the contents of the file message.txt.
 The first argument is the path to the file ("./message.txt").
 The second argument ("utf8") specifies the character encoding to use when reading the file. This ensures that the file is read as a UTF-8 encoded string.
 The callback function (err, data) => { ... } is executed after the file read operation completes. If an error occurs (err is not null), it throws the error. If the operation is successful, it logs the contents of the file (data) to the console.

#### The fs module is required to interact with the file system.
#### The commented fs.writeFile code would create a file named message.txt and write "Hello from Henney!" to it, logging "File saved!" upon success.
#### The fs.readFile code reads the contents of message.txt and logs it to the console. If any errors occur during reading, they are thrown as exceptions.

### 2.3 
![Page Screenshot](/Images/Screenshot%20(158).png)
## RESULTS
PS \UDEMY_Projects-Repo\2.3 NPM> node index.js
My name is Titaniumgrabber Centaur.
My name is Typhoonantelope Stag.
My name is Dogdevourer Fairy.
My name is Powercockatoo Llama.
My name is Stonedagger Crafter. 

### 2.3 TEST
![Page Screenshot](/Images/Screenshot%20(158).png)
## RESULTS
PS \UDEMY_Projects-Repo\2.3 NPM TEST> node index.js
My name is Harley Davidson Cooper.
My name is Orphan.
My name is Wither.
My name is Ben Parker
I am Ravage 2099.
I am Mr. Fantastic.

### 2.3.1 QR CODE PROJECT 
## RESULTS
![Page Screenshot](/Images/Screenshot%20(159).png)

### 3.1 EXPRESS SERVER
![Page Screenshot](/Images/Screenshot%20(162).png)

#### LEARNT ABOUT EXPRESS AND HOW TO CREATE A SERVER 
#### INSTALLED NODEMON TO MONITOR CHNAGES GLOBALLY 

### 3.2 HTTP REQUESTS
![Page Screenshot](/Images/Screenshot%20(164).png)
![Page Screenshot](/Images/Screenshot%20(165).png)
![Page Screenshot](/Images/Screenshot%20(166).png)
![Page Screenshot](/Images/Screenshot%20(167).png)

#### CREATED ENDPOINTS FOR DIFFERENT PARTS OF THE PAGE

### 3.3 POSTMAN 
![Page Screenshot](/Images/Screenshot%20(177).png)

#### USED POSTMAN TO GET RESPONSE CODES

### 3.4 EXPRESS MIDDLEWARE

```javascript
app.post("/submit", (req, res) => {
  console.log(req.body);
}); 
```

Listening on port 3000
{ street: 'Apple', pet: 'Cat' }
{ street: 'Apple', pet: 'Cat' }
#### USED POSTMAN WITH HTML BODY TO RECEIVE REQUESTS USING BODY-PARSER MIDDLEWARE

### 3.4 MIDDLEWARE 
Morgan Logging Formats
Morgan provides several built-in logging formats, each with a different level of detail. Below are the available formats:

Format	Description
combined	Logs detailed request info in Apache combined format (IP, method, URL, status, user agent, referrer, etc.). Best for production.
common	Similar to combined but without the referrer and user-agent fields.
dev	Logs concise output with method, status, response time, and color-coded status codes. Best for development.
short	Minimal logging, similar to common, but without remote IP.
tiny	Logs only method, URL, status, response size, and response time. The most lightweight format.

Example Usage

app.use(morgan("combined")); // Most detailed logging, best for production
app.use(morgan("common"));   // Similar to combined, but slightly shorter
app.use(morgan("dev"));      // Color-coded, concise, great for development
app.use(morgan("short"));    // Minimal, compact logging
app.use(morgan("tiny"));     // Super minimal logging

