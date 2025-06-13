#!/usr/bin/node

const request = require('request');
const fs = require('fs');

// Get URL and destination file path from arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Make the HTTP GET request
request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    fs.writeFile(filePath, body, 'utf8', (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
});
