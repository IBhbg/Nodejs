const express = require('express');
//const app = express();
//var dogR = require('../route/pets')
const mongoose = require("mongoose");

const bookController = require("./controllers/books");
//const Book = require("./models/Book");

mongoose.connect("mongodb+srv://zx:zxcvbnM,1@cluster0.m8e7nka.mongodb.net/?retryWrites=true&w=majority"
).then(() => {
    const app = express();
    app.use(express.json());

    app.get("/books", bookController.findBooks);
    app.post("/books", bookController.createBook);
    app.get("/books/:id", bookController.findBook);
    app.patch("/books/:id", bookController.updateBook);
    app.delete("/books/:id", bookController.deleteBook);

    app.listen(3000, () => {
      console.log("Server has started at port 3000");
    });
  })
  .catch((error) => {
    console.error(error.message);
  });

