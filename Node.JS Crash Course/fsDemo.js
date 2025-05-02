//import fs from 'fs';
//import { writeFile } from 'fs/promises';
import fs from 'fs/promises'; // For using promises with fs 

// readFile() - Asynchronous with callback(the default)
// fs.readFile('./test.txt', 'utf8', (err, data) => { // the callback is executed after the file is read
//     if(err) throw err;
//     console.log(data);
// });

// // readFileSync() - Synchronous version
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

// // readFile() - Asynchronous with promises .then() and .catch()
// fs.readFile('./test.txt', 'utf8')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

  // readFile() - Asynchronous with async/await
  const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
  };

  //WriteFile() 

  const writeFile = async () => {
    try {
       await fs.writeFile('./test.txt', 'Hello, I am writing to this file'); 
       console.log('File written to...');
    } catch (error) {
        console.log(error);
    }
  };

  // appendFile()
  const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nThis is appended text');
        console.log('File appended to...');
    } catch (error) {
        console.log(error);
    }
  }


  writeFile(); // Call the async function to write to the file 
  appendFile(); // Call the async function to append to the file
  readFile(); // Call the async function to read the file 

//  await writeFile(); 
//  await appendFile();
//  await readFile();

//  main();
  