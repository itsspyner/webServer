## Resume Generator
**It uses the pdfkit library to create the pdf document and axois library to extraxt the information form url.**

### Overview
- The Resume Generator pull all the necessary information from a raw json url, and creates a resume that gets saved in the current directory the file is in.
- The function that creates resume only have one argument that is json file name.

### Overview of files
- index.js => It is the main file that gets the information from url and creates the resume.
- resumeCreator.js => It contains the function that creates resume.

### Features
- Easy-to-use
- Support for file format PDF
- Takes input as json file

### Installation
- git clone https://github.com/itsspyner/webServer.git
- cd webServer
- npm install

### Implementation of the program
- node index.js
- Then head to browser and type (localhost:3000)
- The the resume will be in the current directory you are in
