import crypto from 'crypto';

// // createHash() creates a hash object using the specified algorithm
// const hash = crypto.createHash('sha256'); // 'sha256' is a cryptographic hash function that produces a 256-bit hash value 
// hash.update('password1234'); // update() adds data to the hash object; to hash something
// console.log(hash.digest('hex')); 

// // randomBytes() generates cryptographically strong pseudo-random data
// crypto.randomBytes(16, (err, buf) => {
//     if (err) throw err;
//     console.log(buf.toString('hex')); // generates a random 16-byte buffer and converts it to a hexadecimal string
// });

//createCipheriv & createDecipheriv
const algorithm = 'aes-256-cbc'; // AES encryption algorithm with a 256-bit key size and CBC mode
const key = crypto.randomBytes(32); // generates a random 32-byte key for AES-256
const iv = crypto.randomBytes(16); // generates a random 16-byte initialization vector (IV) for AES

const cipher = crypto.createCipheriv(algorithm, key, iv); // creates a cipher object using the specified algorithm, key, and IV
let encrypted = cipher.update('Hello, this is a secret message', 'utf8', 'hex'); // update() encrypts the data; 'utf-8' is the input encoding and 'hex' is the output encoding
encrypted += cipher.final('hex'); // final() finalizes the encryption process and returns any remaining encrypted data
console.log(encrypted); // prints the encrypted message in hexadecimal format

const decipher = crypto.createDecipheriv(algorithm, key, iv); // creates a decipher object using the same algorithm, key, and IV
let decrypted = decipher.update(encrypted, 'hex', 'utf8'); // update() decrypts the data; 'hex' is the input encoding and 'utf-8' is the output encoding
decrypted += decipher.final('utf-8'); // final() finalizes the decryption process and returns any remaining decrypted data
console.log(decrypted); // prints the decrypted message in UTF-8 format, which should match the original plaintext message
