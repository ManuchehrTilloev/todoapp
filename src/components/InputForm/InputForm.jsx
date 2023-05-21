import "./inputForm.style.css";
import { useState } from "react";

const defaultData = {
  name: "",
  dateOfBirth: "",
  password: "",
  passwordConfirm: "",
};

function InputForm() {
  const [data, setData] = useState(defaultData);
  const [printData, setPrintData] = useState([]);

  const onChangeHandler = (e) => {
    // console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setPrintData([...printData, data]);
    console.log("Data:", printData);
    return;
  };

  return (
    <div className="container-main">
      <form className="container-box" onSubmit={onSubmitHandler}>
        <input
          id="0"
          value={data.name}
          type="text"
          onChange={onChangeHandler}
          name="name"
          placeholder="Name"
        />
        <input
          id="1"
          value={data.dateOfBirth}
          type="date"
          onChange={onChangeHandler}
          name="dateOfBirth"
        />
        <input
          id="2"
          value={data.password}
          type="password"
          onChange={onChangeHandler}
          name="password"
          placeholder="Password"
        />
        <input
          id="3"
          value={data.passwordConfirm}
          type="password"
          onChange={onChangeHandler}
          name="passwordConfirm"
          placeholder="Confirm Password"
        />
        <button type="submit">Submit</button>
        {data.password !== data.passwordConfirm && (
          <h1>Passwords not matching</h1>
        )}
        {printData.map((data) => {
          return (
            <div>
              <p>Name: {data.name}</p>
              <p>DOB: {data.dateOfBirth}</p>
              <p>Password: {data.password}</p>
              <p>Confirm Data: {data.passwordConfirm}</p>
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default InputForm;
