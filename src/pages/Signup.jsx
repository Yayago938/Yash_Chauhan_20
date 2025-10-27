import React, { useState } from 'react';
import { emailvalidate, passwordvalidate, usernamevalidate } from '../components/validation.js';
import Emoji from '../assets/login.jpg'

const Signup = () => {
  const [signup, setSignup] = useState({
    name:'',
    email: '',
    password: '',
    username: '',
    confirmpassword: '',
  });

  const [error, setError] = useState({
    email: '',
    password: '',
    username: '',
    confirmpassword: '',
  });

  const validate = () => {
    let newErrors = {};

    // Email validation
    if (!signup.email) {
      newErrors.email = emailvalidate.required;
    } else if (!emailvalidate.pattern.value.test(signup.email)) {
      newErrors.email = emailvalidate.pattern.message;
    }

    // Password validation
    if (!signup.password) {
      newErrors.password = passwordvalidate.required;
    } else if (!passwordvalidate.pattern.value.test(signup.password)) {
      newErrors.password = passwordvalidate.pattern.message;
    } else if (signup.password.length < passwordvalidate.minLength.value) {
      newErrors.password = passwordvalidate.minLength.message;
    }

    // Username validation
    if (!signup.username) {
      newErrors.username = usernamevalidate.required;
    } else if (!usernamevalidate.pattern.value.test(signup.username)) {
      newErrors.username = usernamevalidate.pattern.message;
    } else if (signup.username.length < usernamevalidate.minLength.value) {
      newErrors.username = usernamevalidate.minLength.message;
    } else if (signup.username.length > usernamevalidate.maxLength.value) {
      newErrors.username = usernamevalidate.maxLength.message;
    }

    // Confirm password
    if (signup.password !== signup.confirmpassword) {
      newErrors.confirmpassword = "The password does not match";
    }

    setError(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted:", signup);
      setSignup({ email: '', password: '', username: '', confirmpassword: '' });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[linear-gradient(to_bottom_right,#FFD2A8_0%,#B0D0E0_100%)] px-4 bg-center bg-cover" style={{ backgroundImage: `url(${Emoji})`}}>
    <div className=" bg-pink-100 w-[80%] h-fit flex flex-col gap-8 max-w-md rounded-3xl justify-center items-center">
      <div className="text-center text-6xl md:text-[16vh] h-fit text-shadow-2xs leading-[1.8] font-extrabold text-red-600  text-shadow-lg text-shadow-pink-300  ">
        Signup
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-y-[2vh] items-center">
        
                <input
          type="text"
          value={signup.name}
          onChange={(e) => setSignup({ ...signup, name: e.target.value })}
          placeholder="Enter Name"
          className="w-full px-4 py-3 text-center text-pink-600 text-shadow-pink-200 text-shadow-lg/30 border-2 bg-gray-200 rounded-md"
        />
        {/* Username */}

        <input
          type="text"
          value={signup.username}
          onChange={(e) => setSignup({ ...signup, username: e.target.value })}
          placeholder="Enter username"
          className="w-full px-4 py-3 text-center text-pink-600 text-shadow-pink-200 text-shadow-lg/30 border-2 bg-gray-200 rounded-md"
        />
        {error.username && <p className="text-red-600 text-sm">{error.username}</p>}

        {/* Email */}

        <input
          type="text"
          value={signup.email}
          onChange={(e) => setSignup({ ...signup, email: e.target.value })}
          placeholder="Enter email"
          className="w-full px-4 py-3 text-center text-pink-600 text-shadow-pink-200 text-shadow-lg/30 border-2 bg-gray-200 rounded-md"
        />
        {error.email && <p className="text-red-600 text-sm">{error.email}</p>}

        {/* Password */}

        <input
          type="password"
          value={signup.password}
          onChange={(e) => setSignup({ ...signup, password: e.target.value })}
          placeholder="Enter password"
          className="w-full px-4 py-3 text-center text-pink-600 text-shadow-pink-200 text-shadow-lg/30 border-2 bg-gray-200 rounded-md"
        />
        {error.password && <p className="text-red-600 text-sm">{error.password}</p>}

        {/* Confirm Password */}

        <input
          type="password"
          value={signup.confirmpassword}
          onChange={(e) => setSignup({ ...signup, confirmpassword: e.target.value })}
          placeholder="Confirm password"
          className="w-full px-4 py-3 text-center text-pink-600 text-shadow-pink-200 text-shadow-lg/30 border-2 bg-gray-200 rounded-md"
        />
        {error.confirmpassword && <p className="text-red-600 text-sm">{error.confirmpassword}</p>}

        <input
          type="submit"
          value="Submit"
          className="cursor-pointer w-[60%] py-3 rounded-4xl bg-gradient-to-r from-green-600 via-green-400 to-green-400 text-white font-semibold text-lg shadow-md hover:from-green-600 hover:via-green-500 hover:to-green-400 transition transform duration-150 active:scale-95"
        />
      </form>
    </div>
    </div>
  );
};

export default Signup;
