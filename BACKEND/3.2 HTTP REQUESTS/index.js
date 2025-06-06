import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>HENNEY</h1>");
});

app.get("/Homepage", (req, res) => {
    res.send("<h1>HENNEY</h1><p>Welcome</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Info</h1><p>Email me: eenijeshiku@gmail.com</p>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1><p>This page is for practice</p>");
});

app.listen(3000, () => {
    console.log(`Server is running on port ${port}.`);
});