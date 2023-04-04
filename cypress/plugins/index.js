const xlsx = require("node-xlsx").default;
const fs = require("fs");
const path = require("path");
// const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // on('file:preprocessor', createBundler())
  on("task", {
    parseXlsx({ filePath }) {
      return new Promise((resolve, reject) => {
        try {
          const jsonData = xlsx.parse(fs.readFileSync(filePath));
          resolve(jsonData);
        } catch (e) {
          reject(e);
        }
      });
    }
  });
};