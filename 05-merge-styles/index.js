const path = require('path');
const fs = require('fs');
const { readdir } = require('fs/promises');

const pathSourceDir = path.join(__dirname, 'styles');
const pathDistDir = path.join(__dirname, 'project-dist');
const output = fs.createWriteStream(path.join(pathDistDir, 'bundle.css'));

readdir(pathSourceDir, {withFileTypes: true})
  .then(files => {
    for (const file of files) {
      const pathFile = path.join(pathSourceDir, file.name);
      if (file.isFile() && path.extname(pathFile) === '.css') {
        fs.createReadStream(pathFile).pipe(output);
      }
    }
  });