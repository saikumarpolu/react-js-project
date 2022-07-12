import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputText from "../components/InputText";

const Login = () => {
  const [userDetails, setUserDetails] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("myUserDb"));
    if (user) {
      setUserDetails(user);
    }
  }, []);

  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userDetails.email === inputFields.email &&
      userDetails.password === inputFields.password
    ) {
      localStorage.setItem("loginCredentials", JSON.stringify(inputFields));
      localStorage.removeItem("myUserDb");
      navigate("/home");
    } else {
      setError("Invalid Credentials");
    }
  };

  return (
    <div className="w-full flex justify-center items-center mt-20">
      <div className="md:w-2/6 w-full">
        <p className="text-red-600 text-base font-medium">{error && error}</p>
        <form onSubmit={handleSubmit}>
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
          <Button type="submit" text="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
