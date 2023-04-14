require("../../Datastore/connection");
const mongoose = require("mongoose");
const Users = require("../../Datastore/models/Users");
const Post = require("../../Datastore/models/Post");
const Revenue = require("../../Datastore/models/revenue");

let getUserWithPosts = async () => {
 let data = await Post.find().populate({
  path: "author",
  populate: {
   path: "categoryData",
  },
 });
 return data;
};

// let getUserWithRevenue = async (username) => {
//  let data = await Revenue.find().populate("categoryData");
//  return data;
// };

exports.storeUser = async function (req, res) {
 try {
  let cu = await Post(req.body);
  cu.save();
  res.status(200).send({ data: "OK" });
 } catch (e) {
  res.status(500).send({ data: e.message });
 }
};

exports.fetchSubAdmins = async function (req, res) {
 // res.status(200).send({ data: await getUserWithRevenue() });
 res.status(200).send({ data: await getUserWithPosts() });
};

// added code

exports.getOne = async function (req, res) {
 try {
  const data = await Post.findById(req.params.id);
  res.json(data);
 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};

exports.getAll = async function (req, res) {
 try {
  const data = await Post.find();
  res.json(data);
 } catch (error) {
  res.status;
  (500).json({ message: error.message });
 }
};

exports.updateUser = async function (req, res) {
 try {
  const id = req.params.id;
  const updatedData = req.body;
  const options = { new: true };
  const result = await Post.findByIdAndUpdate(id, updatedData, options);
  res.send(result);
 } catch (error) {
  res.status(400).json({ message: error.message });
 }
};

exports.deleteUser = async function (req, res) {
 try {
  const id = req.params.id;
  const data = await Post.findByIdAndDelete(id);
  res.send(`Document with ${data.name} has been deleted..`);
 } catch (error) {
  res.status(400).json({ message: error.message });
 }
};
