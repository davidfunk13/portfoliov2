const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.static("client/build"));
require("./routes.js")(app);

app.listen(PORT, err => {
  if (err) {
    throw err;
  }
  console.log(`Portfolio v2 webserver listening on port ${PORT}`);
});
