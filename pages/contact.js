// Keep prettier from going to the top
import Navbar from "@/components/Navbar";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <div className="parent-form-container w-screen h-screen pt-[90px] md:pt-[70px] bg-green-200">
      <Navbar textColor={"text-black"}></Navbar>
      <div className="form-container flex flex-col justify-between">
        <div className="text-center pb-[30px] md:pb-[60px] xl:pb-[20px] text-black">
          <h1 className="text-6xl font-robo">Contact Sokes Swig</h1>
          <p className="text-2xl font-robo">
            Have a question or want to order in bulk?
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-[180px] ml-[110px] text-xl md:w-[250px] md:ml-[250px] md:text-3xl lg:ml-[530px] xl:w-[250px] xl:h-[250px] xl:ml-[530px] 2xl:ml-[620px] 2xl:w-[180px] 2xl:h-[210px] flex-col font-button"
        >
          <label className="text-black">First Name</label>
          <input
            type="firstName"
            value={formData.firstName}
            placeholder="First Name"
            className="text-black rounded"
          ></input>
          <label className="text-black">Last Name</label>
          <input
            type="lastName"
            value={formData.lastName}
            placeholder="Last Name"
            className="text-black rounded"
          ></input>
          <label className="text-black">Phone</label>
          <input
            type="phone"
            value={formData.phone}
            placeholder="Phone"
            className="text-black rounded"
          ></input>
          <label className="text-black">Email</label>
          <input
            type="email"
            value={formData.email}
            placeholder="Email"
            className="text-black rounded"
          ></input>
          <label className="mt-[10px] text-black">Message</label>
          <textarea
            className=" text-black content-start rounded"
            type="message"
            value={formData.message}
            name="name"
          ></textarea>
          <button
            type="submit"
            className="h-[35px] w-[75px] mt-[10px] md:w-[100px] bg-white text-black rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
