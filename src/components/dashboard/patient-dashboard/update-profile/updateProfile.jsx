import "./updateProfile.css";
// import axios  from "axios";

import React, { useContext, useState } from "react";
import { TokenContext } from "../../../../routes/route";

const ProfileUpdateForm = () => {
  const [phone, setPhone] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [genotype, setGenotype] = useState("");
  const [medicalHistory, setMedicalHistory] = useState(null);

  const {token , setToken} = useContext(TokenContext);
  console.log("consoling token at update profile");
  console.log(token)

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();  
    formData.append("phone", phone);
    formData.append("profile_picture", profilePicture);
    formData.append("gender", gender);
    formData.append("address", address);
    formData.append("blood_group", bloodGroup);
    formData.append("genotype", genotype);
    formData.append("medical_history", medicalHistory);

    console.log("consoling form data")
    console.log(formData)


    // headers = {
    //   Authorization : `Bearer ${token}`,
    //   "Content-Type" : "application/json",
    //   "Access-Control-Allow-Credentials":"true"
    // }

    // Authorization: `Bearer ${localStorage.getItem("token")}`,

    fetch("http://localhost:8000/user/profile/me/", {
      method: "PUT",
      headers: {
        Authorization : `Bearer ${token}`,
        "Content-type": "application/json",
        "Access-Control-Allow-Credentials":"true"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful update
        console.log(data);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });

  //   axios.put("http://localhost:8000/user/profile/me/", formData, {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
       
  //     }
  //   })
  //   .then((response) => {
  //     console.log(response.data);
  //     // Handle successful update
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     // Handle errors
  //   });

   };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Phone:
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label>
        Profile picture:
        <input
          type="file"
          onChange={(e) => setProfilePicture(e.target.files[0])}
        />
      </label>
      <label>
        Gender:
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <label>
        Blood group:
        <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
          <option value=""></option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB-">AB-</option>

        </select>
      </label>
      <label>
        Genotype:
        <select value={genotype} onChange={(e) => setGenotype(e.target.value)}>
          <option value=""></option>
          <option value="AA">AA</option>
          <option value="AS">AS</option>
          <option value="AC">AC</option>
          <option value="SS">SS</option>
          <option value="SC">SC</option>
        </select>
      </label>
      <label>
        Medical history:
        <input type="file" onChange={(e) => setMedicalHistory(e.target.files[0])} />
      </label>
      <button type="submit">Submit</button>
    </form>
    );
};

export default ProfileUpdateForm;