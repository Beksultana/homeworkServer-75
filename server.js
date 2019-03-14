const express = require('express');
const cors = require('cors');
const Vigenere = require('caesar-salad').Vigenere;


const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

app.post('/encode', (req, res) => {
    const encoded = Vigenere.Cipher(req.body.password).crypt(req.body.message);
    res.send({encoded});
});

app.post('/decode', (req, res) => {
    const decoded = Vigenere.Decipher(req.body.password).crypt(req.body.message);
    res.send({decoded});
});




app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
});