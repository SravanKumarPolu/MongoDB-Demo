const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

// Define a schema for the data model
const useSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

//create model based on the schema
const Use = mongoose.model("User", useSchema);

//create new user
async function creatUser() {
  const user = new User({
    name: "sravan",
    email: "skr.polu@gmail.com",
    age: 27,
  });
  const result = await User.save();
  console.log("User Created", result);
}

//read user
async function getUsers() {
  const users = await User.find();
  console.log("all users", users);
}

// Update a user
async function updateUser(id) {
  const user = await User.findById();
  if (!user) return;
  user.age += 1;
  const result = await user.save();
  console.log("User update", result);
}

//Delete a user
async function deleteUser(id) {
  const result = await User.deleteOne({ _id, id });
  console.log("user Deleted:", result);
}
