import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup method
userSchema.statics.signup = async function (email, password) {
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  // to generate a 10 letter salt
  const salt = await bcrypt.genSalt(10);

  // Appending salt to the password before hashing
  const hash = await bcrypt.hash(password, salt);

  //hashing password, so that the user's filled password is saved as hash in DB
  const user = await this.create({ email, password: hash });

  return user;
};

export default mongoose.model("User", userSchema);
