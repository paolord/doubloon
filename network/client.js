'use strict';

const fs = require('fs');
const peers = [];

// Step 1: Check args if a seedfile is set
if (process.argv.length === 3) {
  // Step 1.2: Use seedfile to populate Known peers array
  const lineReader = require('readline').createInterface({
    input: fs.createReadStream(process.argv[2]),
  });

  lineReader.on('line', (line) => {
    peers.push(line);
  });
}
