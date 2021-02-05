const fs = require("fs");
module.exports.createLoader = config => {
  const loader = (scanFolder, cb) => {
    const files = fs.readdirSync(scanFolder);
    files.forEach(filename => {
      filename = filename.replace(".js", "");
      const file = require(scanFolder + "/" + filename);
      cb(filename, file);
    });
  };

  return {
    initFunction: scanFolder => {
      const func = {};
      loader(scanFolder, (filename, file) => {
        func[filename] = file(config);
      });
      return func;
    },
  };
};