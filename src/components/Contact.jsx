import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dsp8qnl",
        "template_e852bsi",
        form.current,
        "2CUMLFwZfp8nqcHBf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success("Thank you! Your email has been sent.");
    e.target.reset();
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        ref={form}
        method="POST"
        action=""
        className="flex flex-col max-w-[600px] w-full"
        onSubmit={sendEmail}
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-700 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below to send me an email
          </p>
        </div>

        {/* name */}
        <input
          name="user_name"
          className="bg-[#f6f8ff] p-2"
          type="text"
          placeholder="Name"
          required
        />

        {/* email */}
        <input
          name="user_email"
          className="my-4 p-2 bg-[#f6f8ff]"
          type="email"
          placeholder="Email"
          required
        />

        {/* message */}
        <textarea
          name="user_message"
          className="bg-[#f6f8ff] p-2"
          rows="10"
          placeholder="Message"
          required
        ></textarea>

        {/* submit */}
        <button className="text-white border-2 hover:text-gray-100 hover:bg-red-700 hover:border-red-700 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
