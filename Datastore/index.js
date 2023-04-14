const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 6999;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
 console.log("Models");
 console.log("Server is up on port " + port);
});
