import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  sender: { type: String, require: true },
  subject: { type: String, require: true },
  message: { type: String, require: true },
});
const Email = mongoose.models.Email || mongoose.model("Email", emailSchema);

export default Email;
