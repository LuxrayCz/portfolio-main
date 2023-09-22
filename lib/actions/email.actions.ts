"use server";
import Email from "../Models/email.model";
import { connectToDb } from "../mongoose";

type Email = {
  sender: string;
  subject: string;
  message: string;
};

export async function createEmail(emailParam: Email) {
  const { sender, subject, message } = emailParam;

  try {
    connectToDb();
    const newEmail = new Email({
      sender,
      subject,
      message,
    });
    const createdEmail = await newEmail.save();

    return { sender: createdEmail.sender };
  } catch (error) {
    console.error("Error while adding comment:", error);
    throw new Error("Unable to create email");
  }
}
