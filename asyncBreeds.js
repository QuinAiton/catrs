// asyncBreeds
const fs = require('fs');

const breedDetailsFromFile = function (breed, callBack) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) callBack(data);
    if (error) callBack(undefined);
  });
};
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed);
};


// we try to get the return value
breedDetailsFromFile('Bombay', printOutCatBreed);
module.exports = breedDetailsFromFile;