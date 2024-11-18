import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅을 추가
import "./Loading.css";

function Loading() {
  const navigate = useNavigate(); // navigate 함수 초기화

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Result"); // 5초 후 Result 화면으로 이동
    }, 5000); // 5000ms = 5초

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [navigate]);

  return (
    <div>
      <div className="logo">
        <h1>약 판별</h1>
      </div>
      <div className="loadingScreen">
        <div className="spinner"></div>
        <p className="loadingText">판별 중입니다...</p>
      </div>
    </div>
  );
}

export default Loading;
