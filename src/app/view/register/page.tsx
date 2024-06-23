"use client";

import { createSubmitHandler } from "@/app/api/register-end-point";
import { getResponse } from "@/app/api/fetch-end-point";
import { updateResponse } from "@/app/api/update-end-point";
import Topnav from "@/app/component/topNav";
import {
  handleType,
  handlelabel,
  handleplaceholder,
} from "@/app/helpers/helpers";
import {  useEffect, useState } from "react";
import { IRegistration } from "@/app/interface/interfaces";

export default function Register() {
  const [userid, setUserid] = useState<number>(0);
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
  const [data, setData] = useState<IRegistration>({
  id: 0,
  firstname: "",
  lastname: "",
  password: "",
  email: "",
  phonenumber: "",
  dateofbirth: "",
  country: "",
  });
  const [_message, setMessage] = useState<string>("");
  const[updateStatus, setUPdateStatus] = useState<boolean>(false);

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
    "http://localhost:3000/api/register",
    setSuccess,
    setFailed,
    setIsLoading,
    resetForm
  );

  let id = 2
  //fetch data
  const handleFetchData = async()=>{
     await getResponse(
        `http://localhost:3000/api/fetchdata/${id}`,
        setIsLoading,
        setData,
        setMessage
      );

      setUPdateStatus(true)
  }

  //update endpoint
  const updateData = {
    userid,  
    firstname,
    lastname,
    password,
    repeatpass,
    email,
    phonenumber,
    country,
    dateofbirth,
  };

  const handleUpdate = async()=>{
   await updateResponse(
      updateData,
      "http://localhost:3000/api/editregister",
      setSuccess,
      setFailed,
      setIsLoading,
      resetForm
    )
  }
  
  useEffect(() => {
    setUserid(data?.id);
    setFirstname(data?.firstname);
    setLastname(data?.lastname)
    setPassword(data?.password)
    setRepeatpass(data?.password)
    setEmail(data?.email)
    setPhonenumber(data?.phonenumber)
    setCountry(data?.country)
    setDateofbirth(data?.dateofbirth)
  }, [data]);

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
            <h1 className="text-[25px] font-bold text-[dodgerblue] underline cursor-pointer" onClick={handleFetchData}>
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
                  <img src="/googleicon.svg" className="w-8" alt="googleicon"/>
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
                  onClick={updateStatus ? handleUpdate : handleSubmit}
                  disabled={firstname === "" && lastname === ""}
                >
                  {isLoading && "...loading"}
                  {updateStatus ? 'Update' : 'Register'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function async<T>() {
  throw new Error("Function not implemented.");
}

