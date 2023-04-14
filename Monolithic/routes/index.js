const express = require("express");
const userRouter = new express.Router();

const userController = require("../controller/userController");

userRouter.post("/store_user", userController.storeUser);

userRouter.get("/fetch_subs", userController.fetchSubAdmins);
userRouter.get("/getAll", userController.getAll);
userRouter.get("/getOne/:id", userController.getOne);

// added code

userRouter.patch("/update/:id", userController.updateUser);
userRouter.delete("/delete/:id", userController.deleteUser);

module.exports = userRouter;
