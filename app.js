const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/create-user', (req, res) => {
    console.log("Received POST request to /create-user");
    console.log("Request Body:", req.body);

    const username = req.body.username;
    const password = req.body.password;
    
    console.log("Extracted Username:", username);
    console.log("Extracted Password:", password);
    
    res.send('Success');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
