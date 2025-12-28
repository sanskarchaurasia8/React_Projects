import React, { useState } from "react";
import "./App.css";

function App() {

  const [userName, setuserName] = useState('');
  const [userEmail, setuserEmail] = useState('');
  const [userNumber, setuserNumber] = useState('');
  
  const [userImg, setuserImg] = useState(null); 
  // 🔴 CHANGED: pehle string thi, ab File object (image upload ke liye)

  const [position, setposition] = useState('');

  const [Alluser, setAllusers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      userName,
      userEmail,
      userNumber: `+91${userNumber}`, // +91 permanent
      position,

      userImg: userImg ? URL.createObjectURL(userImg) : null,
      // 🔴 CHANGED: selected image ka preview URL create kiya
    };

    setAllusers((prev) => [...prev, newUser]);

    // reset form
    setuserName('');
    setuserEmail('');
    setuserNumber('');
    setuserImg(null);          // 🔴 CHANGED
    setposition('');
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setuserNumber(value);
    }
  };

  const deleteHandler = (index) => {
    const copyusers = [...Alluser];
    copyusers.splice(index, 1);
    setAllusers(copyusers);
  };

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>

        {/* IMAGE UPLOAD */}
        <label className="image-upload">
          <img
            src={
              userImg
                ? URL.createObjectURL(userImg)
                : "https://via.placeholder.com/80"
            }
            alt=" File"
          />
          {/* 🔴 CHANGED: image click par gallery open hogi */}

          <input
            type="file"
            accept="image/*"
            hidden
            required
            onChange={(e) => setuserImg(e.target.files[0])}
            // 🔴 CHANGED: file input (gallery / storage)
          />
        </label>

        <input
          type="text"
          placeholder="Enter Your Current Position"
          required
          value={position}
          onChange={(e) => setposition(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Your Name"
          required
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Your Email"
          value={userEmail}
          onChange={(e) => setuserEmail(e.target.value)}
        />

        <div className="phone-input">
          <span className="country-code">+91</span>
          <input
            type="tel"
            placeholder="Enter Number"
            value={userNumber}
            onChange={handleNumberChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* USER CARDS */}
      {Alluser.map((user, index) => {
        return (
          <div className="card" key={index}>
            <img src={user.userImg} alt="user" />
            <h2>{user.userName}</h2>
            <p style={{ color: 'blue' }}>{user.position}</p>
            <p>{user.userEmail}</p>
            <p>{user.userNumber}</p>

            <button
              onClick={() => deleteHandler(index)}
              // ❌ FIX: pehle galat index ja raha tha
            >
              Remove
            </button>
          </div>
        );
      })}
      
    </div>
  );
}

export default App;
