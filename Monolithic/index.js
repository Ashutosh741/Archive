const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/index");
const app = express();
const port = process.env.PORT || 7999;

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.listen(port, () => {
 console.log("Models");
 console.log("Server is up on port " + port);
});
