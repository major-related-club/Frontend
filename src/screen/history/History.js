import React from "react";
import "./History.css";
import medicine1 from "../image/medicine1.png";
import medicine2 from "../image/medicine2.png";
import medicine3 from "../image/medicine3.png";
import medicine4 from "../image/medicine4.png";
import { useNavigate } from "react-router-dom";

function Result() {
  const navigate = useNavigate();

  // 약을 클릭했을 때 이동할 경로 정의
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div className="logo">
        <h1>약 판별 검색기록</h1>
      </div>
      <div className="imageContainer">
        <div
          className="imageTextPair"
          onClick={() => handleNavigate("/medicine1-details")} // 클릭 시 경로 이동
          style={{ cursor: "pointer" }} // 마우스 커서가 포인터로 변경
        >
          <img
            src={medicine1}
            className="image"
            alt="약 1"
            style={{ paddingLeft: "330px" }}
          />
          <h2>부루펜정 400밀리그램 (이부프로펜)</h2>
        </div>
        <hr className="centered-line" />
        <div
          className="imageTextPair"
          onClick={() => handleNavigate("/medicine2-details")}
          style={{ cursor: "pointer" }}
        >
          <img
            src={medicine2}
            className="image"
            alt="약 2"
            style={{ paddingLeft: "330px" }}
          />
          <h2>지르텍정 (세티리진염산염)</h2>
        </div>
        <hr className="centered-line" />
        <div
          className="imageTextPair"
          onClick={() => handleNavigate("/medicine3-details")}
          style={{ cursor: "pointer" }}
        >
          <img
            src={medicine3}
            className="image"
            alt="약 3"
            style={{ paddingLeft: "330px" }}
          />
          <h2>베아제정</h2>
        </div>
        <hr className="centered-line" />
        <div
          className="imageTextPair"
          onClick={() => handleNavigate("/medicine4-details")}
          style={{ cursor: "pointer" }}
        >
          <img
            src={medicine4}
            className="image"
            alt="약 4"
            style={{ paddingLeft: "330px" }}
          />
          <h2>타세놀정 160밀리그램 (아세트아미노펜)</h2>
        </div>
      </div>
      <div>
        <div className="buttonContainer">
          <button className="buttonStyle" onClick={() => navigate("/")}>
            메인화면
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
