import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registrationContext } from "../Context/RegistrationContextProvider";

export const RegisterPageOne = () => {
  const [data, setData] = useContext(registrationContext);
  const [dis, setdis] = useState(false);

  const navigate = useNavigate();

  function handleChange(event) {
    let value = event.target.value;

    setData({
      ...data,
      [event.target.name]: value,
      isAuth: true,
    });
  }
  //   console.log(data);
  function nextPage() {
    navigate("/register/two");
  }

  console.log(data);
  return (
    <div>
      RegisterPageOne
      <br />
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
        placeholder="Enter User Name"
      />
      <br />
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Enter Email"
      />
      <button disabled={data.email.length < 8} onClick={nextPage}>
        NEXT
      </button>
    </div>
  );
};
