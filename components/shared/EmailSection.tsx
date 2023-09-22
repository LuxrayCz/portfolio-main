"use client";
import { createEmail } from "@/lib/actions/email.actions";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedInIcon from "../../public/linkedin-icon.svg";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setEmailSubmitted(false);
    const data = {
      sender: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const createdEmail = await createEmail(data);
      e.target.email.value = "";
      e.target.subject.value = "";
      e.target.message.value = "";
      setEmailSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-6 relative">
      <div className="z-10">
        <h5 className="text-4xl font-bold text-white my-2 ">Lets connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I will try my
          best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedInIcon} alt="Linkedin icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="text-white block  mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="jacob@google.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full py-2.5 px-2.5"
            />
          </div>
          <div>
            <label htmlFor="subject" className="text-white block mb-2  text-sm font-medium">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full py-2.5 px-2.5"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-white block mb-2  text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full py-2.5 px-2.5 min-h-[50px] max-h-[500px] h-[150px]"
              placeholder="Leave your message here"
            ></textarea>
          </div>
          <button type="submit" className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
            Send Message
          </button>
          {emailSubmitted && <p className="text-green-400">Email sent!</p>}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
