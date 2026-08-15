const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// এখানে রাউটটি /create-user এর বদলে সরাসরি মূল লিংক / (slash) করে দেওয়া হলো
app.post('/', (req, res) => {
    console.log("Received POST request!");
    console.log("Request Body:", req.body);

    const username = req.body.username;
    const password = req.body.password;
    
    console.log("Username:", username);
    console.log("Password:", password);
    
    res.send('Success');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
