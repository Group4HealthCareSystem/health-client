import "./updateProfile.css";
import Header from "../../../../reusables/header/header";
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

    fetch("http://localhost:8000/user/profile/me/", formData, {
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
        if(formData.phone.length > 11) alert("Phone number must not be more than 11")
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
    <div className="profile-update">
      <Header />
    <form onSubmit={handleSubmit}>
      <label>
        Phone:
        <input
          required
          maxLength={11}
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label>
        Profile picture:
        <input
          required
          id="profile-picture"
          type="file"
          onChange={(e) => setProfilePicture(e.target.files[0])}
        />
      </label>

      <label>
        Gender:
        <select required className="select" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value=""></option>
          <option value="male">Female</option>
          <option value="female">Male</option>
          </select>
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
        <select required className="select" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
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
        <select required className="select" value={genotype} onChange={(e) => setGenotype(e.target.value)}>
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
        <input type="fill"  onChange={(e) => setMedicalHistory(e.target.files[0])} />
      </label>

      <button id="buttn" type="submit">Submit</button>
    </form>
    </div>
    );
};

export default ProfileUpdateForm;