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
    <div className="w-screen h-screen bg-green-200">
      <Navbar></Navbar>
      <div className="container pt-[400px] flex flex-row justify-between">
        <div className="pl-[700px] text-black">
          <h1>Contact</h1>
          <p>Contact Stuff</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col pr-[300px]">
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
            typlaceholder="Email"
            className="text-black rounded"
          ></input>
          <label className="mt-[10px] text-black">Message</label>
          <textarea
            className=" text-black align-top content-start rounded"
            type="message"
            value={formData.message}
            name="name"
          />
          <button
            type="submit"
            className="h-[35px] w-[75px] mt-[10px] bg-white text-black rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
