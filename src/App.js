import React from "react";
//import GlobalStyle from "../src/screen/globalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./screen/main/Main";
import CheckImage from "./screen/checkImage/CheckImage";
import Loading from "./screen/loading/Loading";
import Result from "./screen/result/Result";
import Detail from "./screen/detail/Detail";
import Fail from "./screen/fail/Fail";
import History from "./screen/history/History";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/CheckImage" element={<CheckImage />} />
          <Route path="/Loading" element={<Loading />} />
          <Route path="/Result" element={<Result />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/Fail" element={<Fail />} />
          <Route path="/History" element={<History />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
