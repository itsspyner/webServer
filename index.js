const express = require('express');
const bodyParser = require('body-parser');
const { Writable } = require('stream');
const { resume } = require('./resumeGenerator');

const app = express();
app.use(bodyParser.json());

app.post('/json', (req, res) => {
    const jsonData = req.body;

    const doc = resume(jsonData);

    let pdfChunks = [];
    const bufferStream = new Writable({
        write(chunk,encodine, next) {
            pdfChunks.push(chunk);
            next();
        }
    });

    doc.pipe(bufferStream);

    bufferStream.on('finish', () => {
        const pdfBuffer = Buffer.concat(pdfChunks);
        res.setHeader('Content-Type', 'application/pdf');
        res.send(pdfBuffer);

    });
});

app.listen(4000, () => {
    console.log("Listening on port 4000");
});
