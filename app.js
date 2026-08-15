const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// এখানে সরাসরি /create-user রাউটটি যুক্ত করে দেওয়া হলো
app.post('/create-user', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    console.log("New User Received:", username, password);
    res.send('Success');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
