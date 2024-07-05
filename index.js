const express = require('express');    /*express
Imagine you're building a blog website where people can read and write articles. express is like the foundation of your website, providing the basic structure and tools you need to create routes (URLs) and handle requests.*/
const mongoose = require('mongoose');
/*our blog needs to store articles in a database. mongoose helps you interact with the database more easily by providing a way to define what an article should look like and how to save, retrieve, update, and delete articles.*/
const cors = require('cors');
/*Your blog's frontend (the part users see) is running on yourblog.com, but your backend (where your data and logic live) is running on api.yourblog.com. cors allows your frontend to make requests to your backend without getting blocked.*/
const UserModel = require('./models/Users');
/*You need a way to define what user data looks like and how it is stored in the database. UserModel is a blueprint for user data.*/
const app = express();
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Middleware to parse JSON bodies

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/crud");

// Route to get all users
app.get('/', (req, res) => {
    UserModel.find({})
        .then(users => res.json(users)) // Return all users in JSON format
        .catch(err => res.json(err)); // Handle any errors
});

    // Route to get a single user by ID
    app.get('/getUser/:id', (req, res) => {
        const id = req.params.id;
        UserModel.findById(id)
            .then(user => res.json(user)) // Return the user in JSON format
            .catch(err => res.json(err)); // Handle any errors
    });

// Route to update a user by ID
app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate(id, req.body, { new: true })
        .then(user => res.json(user)) // Return the updated user in JSON format
        .catch(err => res.json(err)); // Handle any errors
});

// Route to create a new user
app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
        .then(user => res.json(user)) // Return the created user in JSON format
        .catch(err => res.json(err)); // Handle any errors
});

// Route to delete a user by ID
app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete(id)
        .then(() => res.json({ message: 'User deleted successfully' })) // Return success message
        .catch(err => res.json(err)); // Handle any errors
});

// Start the server on port 3001
app.listen(3001, () => {
    con sole.log("Server is running");
});
