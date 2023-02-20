import {useNavigate} from "react-router-dom";
import {Api} from "../utils/Api";
import React, {useContext, useEffect, useState} from "react";

function KakaoAuth() {
  const navigate = useNavigate();
  // const dispatch = useContext(DispatchContext);
  const [code, setCode] = useState("");

  const getSourceCode = async () => {
    // url에 붙어 있는 코드를 가져온다.
    const params = new URLSearchParams(window.location.search);
    const _code = params.get("code");
    
    if (!code) {
      await kakaoLogin(_code);
    }
    setCode(_code);
  }

  const kakaoLogin = async (_code) => {
    if (!_code) return;
    console.log(_code);
    return; // TODO: 지울 것.

    try{
      const res = await Api.post("/oauth/kakao", {code: _code});
      console.log(res);
      // 백엔드에게 받은 토큰을 저장한다.
      const token = res.token;

      sessionStorage.setItem("userToken", token);

    } catch (e) {
      alert(e);
      navigate("/login");

      return;
    }
    // dispatch 함수를 이용해 로그인 상태로 변환해준다.
    // dispatch({
    //   type: "LOGIN",
    //   payload: kakaoUser,
    // })

    navigate("/");
  };

  //⃣ useEffect를 이용해 redirect url에서 코드를 받아 온다.
  useEffect( ()=> {
    getSourceCode();
  }, [])


  return (
      <div>
        <p>로그인 중입니다. 잠시만 기다려주세요.</p>
      </div>
  )
}

export default KakaoAuth;