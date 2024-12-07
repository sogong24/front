import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const signupClick = async (email, password, username) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/signup",
        {
          email,
          password,
          username,
        }
      );
      console.log("회원가입 성공:", response.data);
      alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
      navigate("/login");
    } catch (error) {
      console.error(
        "회원가입 실패:",
        error.response?.data?.error || error.message
      );
      alert("회원가입에 실패했습니다.");
    }
  };

  const loginClick = () => {
    navigate("/login");
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="w-[700px] min-h-screen mx-auto relative pb-16 bg-gray-50">
        <div className="px-16 relative top-[120px]">
          <div className="flex flex-col items-center">
            <h1 className="font-size-xl font-medium text-4xl font-serif text-center">
              Sign Up
            </h1>

            <div className="flex mt-24 bg-login-input-color w-4/5 rounded px-2 h-10 items-center">
              <FaRegUser size={25} />
              <input
                className="mx-3 flex-grow bg-login-input-color"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>

            <div className="flex mt-8 bg-login-input-color w-4/5 rounded px-2 h-10 items-center">
              <MdOutlineEmail size={25} />
              <input
                className="mx-3 flex-grow bg-login-input-color"
                placeholder="example@uos.ac.kr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>

            <div className="flex mt-8 bg-login-input-color w-4/5 rounded px-2 h-10 items-center">
              <RiLockPasswordLine size={25} />
              <input
                className="mx-3 flex-grow bg-login-input-color"
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>

            <div className="flex justify-end w-4/5 mt-2">
              <button className="underline" onClick={loginClick}>
                로그인하기
              </button>
            </div>

            <div className="w-4/5 mt-14 flex justify-center">
              <button
                onClick={() => signupClick(email, password, username)}
                className="w-full rounded-2xl bg-button-red h-10 text-white font-semibold"
              >
                회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
