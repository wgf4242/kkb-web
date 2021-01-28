const { Buffer } = require("buffer");
const fs = require("fs");
module.exports.parser = path => {
  const readStream = fs.createReadStream(path);
  let reqData = [];
  let size = 0;
  return new Promise(resolve => {
    readStream.on("data", chunk => {
      reqData.push(chunk);
      size += chunk.length;
    });
    readStream.on("end", () => {
      const jsonBuffer = Buffer.concat(reqData, size);
      const jsonData = JSON.parse(jsonBuffer.toString());
      resolve(jsonData);
    });
  });
};