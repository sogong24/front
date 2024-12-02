import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const loginClick = () => {
    login();
  };


  const signupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="w-[700px] min-h-screen mx-auto relative pb-16 bg-gray-50">
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
                type="password"
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
      </div>
    </div>
  );
}

export default Login;