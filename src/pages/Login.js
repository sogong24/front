import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const loginClick = () => {
    setIsLoggedIn(true);
    navigate("/");
  };
  // 데이터베이스의 아이디와 비밀번호와 비교해서 같으면 setIsLoggedIn(true), 다르면 false 후 팝업창

  const signupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="px-16 relative top-[120px]">
      <div className="flex flex-col items-center">
        <h1 className="font-size-xl font-medium text-4xl font-serif text-center">
          Login
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
          ></input>
        </div>

        <div className="flex justify-end w-4/5 mt-2">
          <button className="underline" onClick={signupClick}>
            회원가입하기
          </button>
        </div>

        <div className="w-4/5 mt-14 flex justify-center">
          <button
            onClick={loginClick}
            className="w-full rounded-2xl bg-button-red h-10 text-white font-semibold"
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;