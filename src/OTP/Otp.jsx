import React, { useState } from "react";
import "./Otp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../reusables/header/header";

function Otp() {
  const [firstinput, setFirstInput] = useState("");
  const [secondinput, setSecondInput] = useState("");
  const [thirdinput, setThirdInput] = useState("");
  const [fourthinput, setFourthInput] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { maxLength, value, name } = e.target;

    const fieldArr = name.split('-');
    const fieldIndex = fieldArr[1];
    const fieldIntIndex = parseInt(fieldIndex, 10);

    // Check if no of char in field == maxlength
    if (value.length >= maxLength) {
      // It should not be last input field
      if (fieldIntIndex < 4) {
        // Get the next input field using it's name
        const nextfield = document.querySelector(`input[name=field-${fieldIntIndex + 1}]`);

        // If found, focus the next field
        if (nextfield !== null) {
          // const n = document.querySelector(`input[name=field-${fieldIntIndex - 1}]`);
          // if(n){
          //   if(!n.value) {
          //     const fieldWithoutValueNo = fieldIntIndex - 1;
          //     alert(`please enter value in the field ${fieldWithoutValueNo}`);
          //     return;
          //   }
          // }
          nextfield.focus();
        }
      }
    }

    if (value.length <= 0) {
      if (fieldIntIndex > 1) {
        const nextfield = document.querySelector(`input[name=field-${fieldIntIndex - 1}]`);

        // If found, focus the previous field
        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }
  };

  const getAllDigits = () => {
    return firstinput + secondinput + thirdinput + fourthinput;
  };
  const handleApi = (e) => {
    console.log(getAllDigits());
    let token = getAllDigits();
    if(getAllDigits().length < 4) {
      return alert("Please complete filling all the otp fields before you proceed");
    }
    axios
      .post(`http://localhost:8080//api/v1/passenger/confirmPassword/${token}`, {
        otpNumber: getAllDigits(),
      })
      .then((res) => {
        console.log(res);
        res.data.isSuccessful && navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
    setFirstInput("");
    setSecondInput("");
    setThirdInput("");
    setFourthInput("");
  };

  return (
    <div className="otp_container">
      <Header />
      <div className="otp">
        <div className="otp_form">
          <div className="otp_text">
          
            <form>
              <h3>Enter your Otp Number</h3>
              <div className="input_form">
                <input
                  name="field-1"
                  type="password"
                  maxLength={1}
                  value={firstinput}
                  tabIndex="1"
                  //onKeyUp={(e) => inputTab(e)}
                  placeholder="__"
                  onChange={(e) => {
                    handleChange(e);
                    setFirstInput(e.target.value);
                  }}
                />

                <input
                  name="field-2"
                  type="password"
                  maxLength={1}
                  value={secondinput}
                  tabIndex="2"
                  // onKeyUp={(e) => inputTab(e)}
                  placeholder="__"
                  onChange={(e) => {
                    handleChange(e);
                    setSecondInput(e.target.value);
                  }}
                />

                <input
                  name="field-3"
                  type="password"
                  maxLength={1}
                  value={thirdinput}
                  tabIndex="3"
                  // onKeyUp={(e) => inputTab(e)}
                  placeholder="__"
                  onChange={(e) => {
                    handleChange(e);
                    setThirdInput(e.target.value);
                  }}
                />

                <input
                  name="field-4"
                  type="password"
                  maxLength={1}
                  value={fourthinput}
                  tabIndex="4"
                  // onKeyUp={(e) => inputTab(e)}
                  placeholder="__"
                  onChange={(e) => {
                    handleChange(e);
                    setFourthInput(e.target.value);
                  }}
                />
              </div>
            </form>
            <p>
              <button onClick={handleApi} className="btn_otp">
                Continue
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otp;