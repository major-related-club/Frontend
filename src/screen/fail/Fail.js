import React, { useState, useRef } from "react";
import "./Fail.css";
import fail from "../image/fail.png";
import { useNavigate } from "react-router-dom";

function Fail() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="logo">
        <h1>약 판별</h1>
      </div>
      <div className="fail">
        <img
          src={fail}
          alt=" "
          style={{ width: "300px", height: "300px" }}
        ></img>
      </div>
      <div className="announce" style={{ marginTop: "60px" }}>
        <h2>해당 약을 찾을 수 없어요</h2>
        <h2>인식에 실패했거나 등록이 안 된 약이에요</h2>
      </div>
      <div className="buttonContainer">
        <button className="buttonStyle" onClick={() => navigate("/Loading")}>
          다시 시도하기
        </button>
        <button className="buttonStyle" onClick={() => navigate("/")}>
          메인화면으로
        </button>
      </div>
    </div>
  );
}

export default Fail;
