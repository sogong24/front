function Signup() {
  return (
    <div className="px-16 relative top-[120px]">
      <div className="flex flex-col items-center">
        <h1 className="font-size-xl font-medium text-4xl font-serif text-center">
          Sign up
        </h1>

        <div className="mt-20 text-start w-full text-signup-text-color font-semibold">
          회원정보를 입력해주세요.
        </div>

        <div className="w-full rounded-xl bg-white flex flex-col justify-center mt-3 p-5 space-y-14">
          <div>
            <div className="flex pl-2">
              <div className="w-16 text-signup-text-color font-bold">
                아이디{" "}
              </div>
              <div className="text-red-500 "> *</div>
              <div className="flex flex-grow border-b ml-5 mr-20">
                <input className="flex-grow" placeholder="이메일 입력"></input>
                <span>@uos.ac.kr</span>
              </div>
            </div>
            <div className="flex justify-center pl-2">
              <div className="w-16"></div>
              <div>&nbsp;</div>
              <div className="flex flex-grow ml-5 mr-20">
                <div className="text-xs font-normal text-button-red">
                  중복된 아이디입니다.
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex pl-2">
              <div className="w-16 text-signup-text-color font-bold">
                비밀번호
              </div>
              <div className="text-red-500"> *</div>
              <div className="flex flex-grow border-b ml-5 mr-20">
                <input
                  className="flex-grow"
                  placeholder="비밀번호 입력"
                ></input>
              </div>
            </div>
            <div className="flex justify-center pl-2">
              <div className="w-16"></div>
              <div>&nbsp;</div>
              <div className="flex flex-grow ml-5 mr-20">
                <div className="text-xs font-normal text-button-red">
                  8자 이상의 특수기호, 숫자, 알파벳 조합
                </div>
              </div>
            </div>
          </div>

          <div className="flex pl-2">
            <div className="w-16 text-signup-text-color font-bold">닉네임</div>
            <div className="text-red-500"> *</div>
            <div className="flex flex-grow border-b ml-5 mr-20">
              <input className="flex-grow" placeholder="닉네임 입력"></input>
            </div>
          </div>
        </div>
        <button className="w-full rounded-md bg-signup-box-color flex justify-center mt-14 p-5">
          <div className="text-white font-extrabold text-xl">회원가입</div>
        </button>
      </div>
    </div>
  );
}
// 회원가입 버튼을 누르면 아이디와 비밀번호 데이터베이스에 추가, 팝업창이 뜨고 클릭하면 로그인 화면으로 이동
// 아이디가 중복되어 있으면 중복된 아이디입니다. 표시
// 비밀번호가 조건에 부합하면 8자 이상의 특수기호, 숫자, 알파벳 조합 텍스트 없어짐.

export default Signup;
