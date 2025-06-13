#!/usr/bin/node

const fs = require('fs');

// Get file path from command line argument
const filePath = process.argv[2];

// Read the file asynchronously in utf-8 encoding
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
