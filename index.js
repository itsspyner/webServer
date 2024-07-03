const http = require('http');
const fs = require('fs').promises;
const axios = require('axios');
const resume = require('./resume.js');

http.createServer((req, res) => {
    async function main() {
        try {
            const url = "https://raw.githubusercontent.com/itsspyner/resume-generator/main/resume/resumeInfo.json";
            const response = await axios.get(url, { responseType: 'arraybuffer' });
            const fileData = Buffer.from(response.data, 'binary');
            await fs.writeFile('./file.json', fileData);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("JSON file saved");
            resume.resume('./file.json');
        } catch (err) {
            console.error(err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end("Failed to save JSON file");
        }
    }
    main();
}).listen(3000, () => {
    console.log("Server listening on port 3000");
});
