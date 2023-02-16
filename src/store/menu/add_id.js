const fs = require("fs");

const uniqueID = () => {
  return (
    new Date().getTime().toString(16) +
    "-" +
    Math.random().toString(16).substr(2)
  );
};

fs.readFile("menu-data.json", "utf8", function (err, data) {
  if (err) {
    console.error(err);
  } else {
    let obj = JSON.parse(data);
    obj.map((section) => {
      section.id = uniqueID();
      section.items.map((item) => {
        item.id = uniqueID();
      });
    });
    let json = JSON.stringify(obj);
    fs.writeFile("menu-data.json", json, "utf8", function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log("JSON file updated.");
      }
    });
  }
});
