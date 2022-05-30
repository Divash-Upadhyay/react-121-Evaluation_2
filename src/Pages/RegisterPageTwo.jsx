import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registrationContext } from "../Context/RegistrationContextProvider";

export const RegisterPageTwo = () => {
  const [data, setData] = useContext(registrationContext);
  const navigate = useNavigate();
  console.log(data);
  function handleChange(event) {
    let value = event.target.value;
    setData({
      ...data,
      [event.target.name]: value,
    });
  }
  useEffect(() => {}, [nextPage]);
  function nextPage() {
    navigate("/dashboard");
  }
  function previousPage() {
    navigate("/register/one");
  }
  return (
    <div>
      <input
        type="text"
        name="address"
        value={data.address}
        onChange={handleChange}
        placeholder="Enter Address"
      />
      <br />
      <input
        type="Number"
        name="number"
        value={data.number}
        onChange={handleChange}
        minLength={10}
        placeholder="Enter Mobile Number"
      />
      <br />
      <button onClick={previousPage}>Prev</button>
      <button disabled={data.number.length < 10} onClick={nextPage}>
        Submit
      </button>
    </div>
  );
};
