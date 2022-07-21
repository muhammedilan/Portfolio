import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      className="h-[100vh] px-3 sm:px-0 flex justify-center items-center
    bg-[#0ca6ff]"
    >
      <form
        ref={form}
        className="bg-white shadow-md  p-4 font-medium text-[15.5px] shadow-white w-[420px] h-[560px] rounded-lg "
        onSubmit={sendEmail}
      >
        <h1 className="text-center font-semibold text-[24px] text-[#0ca6ff]">
          Contact Me
        </h1>
        <input
          type="text"
          name="NameOrCompanyName"
          placeholder="Your name or company name"
          className="w-full rounded-lg px-3 ring-2 ring-gray-400 h-[45px] mt-8 bg-white outline-none focus:ring-2 focus:ring-[#0ca6ff] transition duration-300"
        />
        <input
          type="email"
          name="Email"
          placeholder="Email address so I can reply to you"
          className="w-full rounded-lg px-3 ring-2 mt-8 ring-gray-400 h-[45px] bg-white outline-none focus:ring-2 focus:ring-[#0ca6ff] transition duration-300"
        />
        <textarea
          name="Message"
          placeholder="You can write a message for advertisement or job offer"
          className="w-full p-2 ring-2 mt-8 ring-gray-400 rounded-lg h-[100px] max-h-[130px] bg-white outline-none focus:ring-2 focus:ring-[#0ca6ff] transition duration-300"
        ></textarea>
        <button
          type="submit"
          className="w-full h-[45px] font-medium text-[18px] rounded-lg bg-white ring-2 mt-8 ring-gray-400 text-[#0ca6ff] hover:ring-0 hover:bg-[#0ca6ff] transition duration-300 hover:text-white"
        >
          Send
        </button>
        <p className="text-[13.5px] text-black font-medium mt-8">
          If you want to send a message to my e-mail address directly, my e-mail
          address is{" "}
          <a href="mailto:muhammedilan04@outlook.com" className="text-[#0ca6ff]">
           muhammedilan04@outlook.com
          </a>
        </p>
      </form>
    </div>
  );
};

export default Contact;
