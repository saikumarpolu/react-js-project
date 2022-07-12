import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import InputText from "../components/InputText";

const Register = () => {
  const [userDetails, setUserDetails] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("myUserDb"));
    if (user) {
      setUserDetails(user);
    }
  }, []);
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    profession: "",
  });

  const handleSubmit = () => {
    localStorage.setItem("myUserDb", JSON.stringify(inputFields));
  };
  if (userDetails) {
    navigate("/login");
  }

  return (
    <div className="w-full flex justify-center items-center mt-20">
      <div className="md:w-2/6 w-full">
        <form onSubmit={handleSubmit}>
          <InputText
            label="Name"
            name="name"
            placeholder="Please enter your name"
            onChangeValue={(e) =>
              setInputFields({ ...inputFields, name: e.target.value })
            }
            value={inputFields.name}
          />
          <br />
          <InputText
            label="Email Address"
            name="email"
            placeholder="Please enter the email"
            onChangeValue={(e) =>
              setInputFields({ ...inputFields, email: e.target.value })
            }
            value={inputFields.email}
            type="email"
          />
          <br />
          <InputText
            label="Password"
            name="password"
            placeholder="Please enter the code..."
            onChangeValue={(e) =>
              setInputFields({ ...inputFields, password: e.target.value })
            }
            value={inputFields.password}
            type="password"
          />
          <br />
          <InputText
            label="Phone Number"
            name="phoneNumber"
            placeholder="Please enter the phone number"
            onChangeValue={(e) =>
              setInputFields({ ...inputFields, phoneNumber: e.target.value })
            }
            value={inputFields.phoneNumber}
            type="number"
          />
          <br />
          <div className="w-full flex flex-col">
            <label
              htmlFor="profession"
              className="capitalize font-medium text-base"
            >
              Profession
            </label>
            <select
              name="profession"
              id="profession"
              className="border border-gray-400 text-base font-medium p-2 rounded-md"
              value={inputFields.profession}
              onChange={(e) =>
                setInputFields({ ...inputFields, profession: e.target.value })
              }
            >
              <option />
              <option value="frontEnd">Front-End</option>
              <option value="backEnd">Back-End</option>
              <option value="fullStack">Full-Stack</option>
            </select>
          </div>
          <br />
          <Button type="submit" text="Register" />
        </form>
      </div>
    </div>
  );
};

export default Register;
