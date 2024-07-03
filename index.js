const http = require('http');
const fs = require('fs').promises;
const axios = require('axios');
const resume = require('./resume.js');

http.createServer((res, req) =>{
    async function main() {
        try {
            const url = "https://raw.githubusercontent.com/itsspyner/resume-generator/main/resume/resumeInfo.json";
            const response = await axios.get(url, { responseType: 'arraybuffer' });
            const fileData = Buffer.from(response.data, 'binary');
            await fs.writeFile('./file.json', fileData);
            req.end("PDF file saved");
            resume.resume('./file.json');
        } catch (err) {
            console.error(err);
        }
    }
    main();
}).listen(3000);
