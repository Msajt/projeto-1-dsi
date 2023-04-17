const fs = require("fs");
const path = require("path");

function writeToFile(data) {
    try {
        fs.writeFileSync(
            path.join(__dirname, "..", "models", "movies.json"),
            JSON.stringify(data),
            "utf-8"
        );
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    writeToFile,
};
