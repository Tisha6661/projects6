const express = require('express');
const fs = require('fs');
const processPython = require('./JStoPython.js');

const app = express();

app.get("/",async (req , res) => {
    let obj = await processPython.processPython('./Pys.py',["photo","C:/Users/piyus/Downloads/WhatsApp Image 2024-03-28 at 22.49.34 (3).jpeg","https://i.pinimg.com/originals/d6/0c/ae/d60cae213c52ae8111a55da8ff28e5b8.png"]);
    res.send(obj);
})

// Configure multer to store uploaded files in the 'uploads' directory
// const upload = multer({ dest: 'uploads/', storage: multer.memoryStorage({}) });

// // Handle form submission
// app.post('/upload', upload.single('image'), (req, res) => {
//     console.log(req.file); // Information about the uploaded file

//   fs.writeFile('C:/Users/piyus/Desktop/103879695.jpg', req.file.buffer, function (err) {
//     if (err) {
//         console.log(err);
//         res.send('Error uploading file');
//         return;
//     }
//     res.send('File uploaded successfully');})
// });



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

