import React, { useState, useRef } from "react";
import "./Main.css";
import search from "../image/search.png";
import history from "../image/history.png";
import image from "../image/image.png";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const [showBox, setShowBox] = useState(false); // 상자 표시 상태 관리
  const fileInputRef = useRef(null); // 파일 입력 참조
  const [selectedFile, setSelectedFile] = useState(null); // 업로드된 파일 상태

  const toggleBox = () => {
    setShowBox((prev) => !prev); // 클릭 시 상자 표시 상태 토글
  };

  const handleImageClick = () => {
    // 파일 입력을 클릭하여 파일 업로드 대화상자 표시
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file); // 파일을 상태로 저장
      console.log("업로드된 파일:", file.name); // 파일 이름 출력
      // 'Check' 페이지로 파일과 함께 이동
      navigate("/CheckImage", { state: { uploadedFile: file } });
    }
  };

  return (
    <div>
      <div className="logo">
        <h1>약 판별</h1>
      </div>
      <div className="search">
        <img
          className="history"
          src={history}
          alt="검색 기록"
          onClick={() => navigate("/History")}
        />
        <img
          className="searches"
          src={search}
          alt="검색"
          onClick={toggleBox} // 클릭 시 상자 표시 토글
        />
      </div>

      {showBox && (
        <div className="popup-box" style={{ marginTop: "20px" }}>
          <img
            src={image}
            className="image"
            onClick={handleImageClick} // 이미지 클릭 시 파일 업로드
            alt="사진 업로드"
            style={{ width: "200px", height: "200px" }}
          />
          <h2>사진 업로드</h2>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }} // 기본 파일 입력 숨김
            onChange={handleFileChange} // 파일 변경 시 처리
          />
          <button onClick={toggleBox}>닫기</button>
        </div>
      )}
    </div>
  );
}

export default Main;
