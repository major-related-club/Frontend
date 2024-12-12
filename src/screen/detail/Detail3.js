import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Detail.css";

function Detail() {
  const [medicineDetails, setMedicineDetails] = useState(null); // 약 데이터를 관리할 상태
  const navigate = useNavigate();

  // 서버에서 약 데이터 가져오기
  useEffect(() => {
    const fetchMedicineDetails = async () => {
      try {
        // 데이터가 로딩 중일 때 "Loading" 화면으로 이동
        navigate("/Loading");

        // 서버에서 데이터를 가져오는 요청 (API 엔드포인트를 적절하게 설정하세요)
        const response = await axios.get(
          "https://your-server-endpoint/medicine-details"
        );

        // 데이터가 로드되면 medicineDetails에 저장
        setMedicineDetails(response.data);

        // 데이터가 로드되면 상세 화면으로 이동
        navigate("/Detail2");
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
      }
    };

    fetchMedicineDetails();
  }, [navigate]);

  // 로딩 중에는 다른 화면으로 이동하기 때문에 아래 부분은 실행되지 않음
  if (!medicineDetails) {
    return null;
  }

  return (
    <div>
      <div className="logo">
        <h1>약 판별</h1>
      </div>
      <div className="contentContainer">
        <img
          src={medicineDetails.imageUrl} // 서버에서 받아온 이미지 URL
          className="medicineImage"
          alt={medicineDetails.name}
          style={{ paddingLeft: "300px", width: "400px", height: "200px" }}
        />
        <div className="description">
          <p style={{ fontSize: "28px" }}>
            제품명: {medicineDetails.name} ({medicineDetails.ingredient})
          </p>
          <p style={{ fontSize: "28px" }}>모양: {medicineDetails.shape}</p>
        </div>
      </div>
      <div>
        <h2
          style={{ fontSize: "28px", marginLeft: "350px", marginTop: "80px" }}
        >
          함께 복용 금지
        </h2>
        <ul style={{ marginLeft: "350px", fontSize: "20px" }}>
          {medicineDetails.contraindications.map((item, index) => (
            <li style={{ marginBottom: "11px" }} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="buttonContainer">
        <button className="buttonStyle" onClick={() => navigate("/")}>
          메인화면
        </button>
        <button className="buttonStyle" onClick={() => navigate("/History")}>
          검색기록 확인
        </button>
      </div>
    </div>
  );
}

export default Detail;
