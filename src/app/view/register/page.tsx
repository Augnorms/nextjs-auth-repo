"use client";

import { createSubmitHandler } from "@/app/api/register-end-point";
import Topnav from "@/app/component/topNav";
import {
  handleType,
  handlelabel,
  handleplaceholder,
} from "@/app/helpers/helpers";
import { useState } from "react";

export default function Register() {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatpass, setRepeatpass] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phonenumber, setPhonenumber] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [dateofbirth, setDateofbirth] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [failed, setFailed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleValue = (idx: number) => {
    switch (idx) {
      case 0:
        return firstname;
      case 1:
        return lastname;
      case 2:
        return password;
      case 3:
        return repeatpass;
      case 4:
        return email;
      case 5:
        return phonenumber;
      case 6:
        return country;
      case 7:
        return dateofbirth;
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    switch (id) {
      case "1":
        setFirstname(value);
        break;
      case "2":
        setLastname(value);
        break;
      case "3":
        setPassword(value);
        break;
      case "4":
        setRepeatpass(value);
        break;
      case "5":
        setEmail(value);
        break;
      case "6":
        setPhonenumber(value);
        break;
      case "7":
        setCountry(value);
        break;
      case "8":
        setDateofbirth(value);
        break;
    }
  };

  const formData = {
    firstname,
    lastname,
    password,
    repeatpass,
    email,
    phonenumber,
    country,
    dateofbirth,
  };

  const resetForm = () => {
    setFirstname("");
    setLastname("");
    setPassword("");
    setRepeatpass("");
    setEmail("");
    setPhonenumber("");
    setCountry("");
    setDateofbirth("");
  };

  //submitting form
  const handleSubmit = createSubmitHandler(
    formData,
    "http://localhost:3000/register",
    setSuccess,
    setFailed,
    setIsLoading,
    resetForm
  );

  return (
    <div className="w-full h-screen">
      <Topnav />

      <div
        className="w-full h-[88vh] p-10 mt-[104px] bg-[url('/formbck1.jpg')] 
         bg-cover bg-center flex justify-center"
      >
        <div className="w-[50%] p-3 bg-white rounded-xl shadow-lg bg-opacity-60">
          <div className="w-full p-8 relative overflow-hidden">
            <div
              className="w-[20%] p-3 border rounded-md text-center bg-[green] text-white"
              style={{
                position: "absolute",
                top: 0,
                left: success ? "350px" : "-180px",
                transition: "left 0.6s ease, top 0.6s ease",
              }}
            >
              Success!!
            </div>

            <div
              className="w-[20%] p-3 border rounded-md text-center bg-[red] text-white"
              style={{
                position: "absolute",
                top: 0,
                left: failed ? "350px" : "-180px",
                transition: "left 0.6s ease, top 0.6s ease",
              }}
            >
              Failed!!
            </div>
          </div>

          <div className="w-full p-1 mt-5 text-center">
            <h1 className="text-[25px] font-bold text-[dodgerblue] underline">
              Registration form
            </h1>
          </div>

          <div className="w-full h-[60vh] p-5 mt-5 border shadow-lg rounded-xl">
            <div className="w-full grid grid-cols-2 gap-4">
              {Array(8)
                .fill(0)
                .map((_, idx) => (
                  <div className="w-full p-2 mt-4 shadow" key={idx + 1}>
                    <label className="font-bold text-[dodgerblue]">
                      {handlelabel(idx)}
                    </label>
                    <input
                      type={handleType(idx)}
                      id={`${idx + 1}`}
                      placeholder={handleplaceholder(idx)}
                      className="w-full p-2 outline-none border border-[dodgerblue] rounded"
                      value={handleValue(idx)}
                      onChange={handleChange}
                    />
                  </div>
                ))}
              <div className="w-full p-0 mt-4 shadow text-center">
                <button className="w-full p-2 flex justify-center"
                   onClick={() => window.location.href = 'http://localhost:3000/auth/google'}
                >
                  <img src="/googleicon.svg" className="w-8"/>
                </button>
              </div>

              <div className="w-full p-0 mt-4 shadow">
                <button
                  className={`w-full p-2 font-bold text-white bg-[dodgerblue] rounded 
                  ${
                    firstname === "" || lastname === ""
                      ? "cursor-not-allowed"
                      : "bg-[dodgerblue] cursor-pointer"
                  }`}
                  onClick={handleSubmit}
                  disabled={firstname === "" && lastname === ""}
                >
                  {isLoading && "...loading"}
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
