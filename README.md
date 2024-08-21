## Resume Generator
**It uses the pdfkit library to create the pdf document and express library for webserver interaction. It uses postman for making api request**

### Overview
- The main file index.js contain the code for extracting the information form webserver and resumeCreator.js contains the code for creating the resume.
- The function that creates resume only have one argument that is json .
- The jsonData gets extracted from the raw body from postman and gets saved in "/json" endpoint.

### Overview of files
- index.js => It is the main file that send api request and gets response.
- resumeCreator.js => It contains the function that creates resume.

### Features
- Easy-to-use
- Support for file format PDF.
- Takes input as json file.
- Uses postman for api requests.

### Installation
- git clone https://github.com/itsspyner/webServer.git
- cd webServer
- npm install

### Implementation of the program
- node index.js its should say "Listening on port 4000".
- Then head to postman->file hit new and click in http.
- Then change the get request to post request and write (http://localhost:4000/json) in url.
- Then in the body section choose raw and put the JSON resume data.
- Then click on send the resume will be generated in postman.
