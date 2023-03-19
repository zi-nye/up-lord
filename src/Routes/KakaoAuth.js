import {useNavigate} from "react-router-dom";
import {Api} from "../utils/Api";
import React, {useEffect} from "react";

function KakaoAuth() {
  const navigate = useNavigate();

  // url에 붙어 있는 코드를 가져온다.
  const params = new URLSearchParams(window.location.search);
  const kakaoCode = params.get("code");

  useEffect(  ()=> {
    Api.post("/oauth/kakao", {code: kakaoCode})
        .then(({data}) => {
          console.log(data);
          // 백엔드에게 받은 토큰을 저장한다.
          const token = data.token;
          sessionStorage.setItem("userToken", token);

          navigate("/");
        })
        .catch((e) => {
          console.error(e);
          navigate("/login");
        })
  }, []);


  return (
      <div>
        <p>로그인 중입니다. 잠시만 기다려주세요.</p>
      </div>
  )
}

export default KakaoAuth;