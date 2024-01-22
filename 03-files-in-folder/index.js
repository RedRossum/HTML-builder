const path = require('path');
const { readdir } = require('fs/promises');
const fs = require('fs');

const pathFolder = path.join(__dirname, 'secret-folder');

readdir(pathFolder, {withFileTypes: true})
  .then(files => {
    for (const file of files) {
      if (file.isFile()) {
        const fileData = path.parse(file.name);

        fs.stat(path.join(pathFolder, file.name), (err, stats) => {
          console.log(`${fileData.name} - ${fileData.ext.slice(1)} - ${stats.size} bytes`);
        });
      }
    }
  });