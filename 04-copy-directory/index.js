const path = require('path');
const {mkdir, readdir, rm, copyFile} = require('fs/promises');

const pathSourceDir = path.join(__dirname, 'files');
const pathCopyDir = path.join(__dirname, 'files-copy');

async function copyDir() {
  await mkdir(pathCopyDir, {recursive: true});

  const filesCopyDir = await readdir(pathCopyDir);

  for (const file of filesCopyDir) {
    await rm(path.join(pathCopyDir, file));
  }

  const filesSourceDir = await readdir(pathSourceDir);

  for (const file of filesSourceDir) {
    await copyFile(path.join(pathSourceDir, file), path.join(pathCopyDir, file));
  }
}

copyDir();