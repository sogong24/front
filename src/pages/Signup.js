import React from 'react';
import { useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

function Signup() {
  const navigate = useNavigate();

  const signupClick = () => {
    // 회원가입 로직 구현
    navigate('/login');
  };

  const loginClick = () => {
    navigate('/login');
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="w-[700px] min-h-screen mx-auto relative pb-16 bg-gray-50">
        <div className="px-16 relative top-[120px]">
          <div className="flex flex-col items-center">
            <h1 className="font-size-xl font-medium text-4xl font-serif text-center">
              회원가입
            </h1>

            <div className="flex mt-24 bg-login-input-color w-4/5 rounded px-2 h-10 items-center">
              <MdOutlineEmail size={25} />
              <input
                className="mx-3 flex-grow bg-login-input-color"
                placeholder="example@uos.ac.kr"
              ></input>
            </div>

            <div className="flex mt-8 bg-login-input-color w-4/5 rounded px-2 h-10 items-center">
              <RiLockPasswordLine size={25} />
              <input
                className="mx-3 flex-grow bg-login-input-color"
                placeholder="password"
                type="password"
              ></input>
            </div>

            <div className="flex mt-8 bg-login-input-color w-4/5 rounded px-2 h-10 items-center">
              <RiLockPasswordLine size={25} />
              <input
                className="mx-3 flex-grow bg-login-input-color"
                placeholder="confirm password"
                type="password"
              ></input>
            </div>

            <div className="flex justify-end w-4/5 mt-2">
              <button className="underline" onClick={loginClick}>
                로그인하기
              </button>
            </div>

            <div className="w-4/5 mt-14 flex justify-center">
              <button
                onClick={signupClick}
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