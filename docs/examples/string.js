const nnLoader = require('nnloader');

async function main() {
  const myFileContent = await nnLoader.loadString('/files/myFile.txt');
}
