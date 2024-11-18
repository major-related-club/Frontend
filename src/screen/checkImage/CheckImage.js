import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // useLocation 추가
import axios from "axios"; // axios import
import "./CheckImage.css";

function CheckImage() {
  const navigate = useNavigate();
  const location = useLocation(); // 전달된 state를 받기 위해 useLocation 사용

  const uploadedFile = location.state?.uploadedFile; // 전달된 파일을 받음
  const [uploadStatus, setUploadStatus] = useState(""); // 업로드 상태 관리

  // 파일이 있으면 URL.createObjectURL로 이미지 경로 생성
  const imageSrc = uploadedFile ? URL.createObjectURL(uploadedFile) : null;

  // 이미지 서버에 전송
  const handleImageUpload = async () => {
    if (!uploadedFile) {
      setUploadStatus("파일이 없습니다.");
      return;
    }

    const formData = new FormData();
    formData.append("file", uploadedFile); // FormData에 파일 추가

    try {
      // 서버에 이미지 POST 요청
      const response = await axios.post(
        "https://your-server-endpoint/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setUploadStatus("파일 업로드 성공!"); // 성공 시 상태 업데이트
      console.log("서버 응답:", response.data);
    } catch (error) {
      setUploadStatus("파일 업로드 실패."); // 실패 시 상태 업데이트
      console.error("업로드 오류:", error);
    } finally {
      // 파일 전송 후 Loading 페이지로 이동
      navigate("/Loading");
    }
  };

  return (
    <div>
      <div className="logo">
        <h1>약 판별</h1>
      </div>
      <div className="imageStyle">
        {imageSrc ? (
          <img src={imageSrc} className="imageSize" alt="업로드된 사진" />
        ) : (
          <p>사진을 업로드하지 않았습니다.</p>
        )}
      </div>
      <div className="buttonContainer">
        <button className="buttonStyle" onClick={handleImageUpload}>
          판별하기
        </button>
        <button className="buttonStyle" onClick={() => navigate("/Loading")}>
          다시하기
        </button>
      </div>
      {uploadStatus && <p>{uploadStatus}</p>} {/* 업로드 상태 표시 */}
    </div>
  );
}

export default CheckImage;
