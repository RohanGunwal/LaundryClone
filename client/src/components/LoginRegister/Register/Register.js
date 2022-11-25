import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Left from "../Left/Left";
import Right from "../Right/Right";
import "./Register.css";

export default function Register(props) {
  const [stateData, setStateData] = useState([]);
  const [districtData, setDistrictData] = useState([]);
  const [state, setState] = useState("");

  const config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJ5YWRhdi5ndW53YWwucm9oYW5AZ21haWwuY29tIiwiYXBpX3Rva2VuIjoiMHRHX0paX0FzcjNEM2RsaXpvUklES3lNV0REbmRyRjZIZlg1YlM0SThMa1FwanBBbm9JZ2VsVEdqRG1GcXBCc0pISSJ9LCJleHAiOjE2Njk0MTE5NzV9.8kvH7iccrE4vlmV0rubkiAyBSwEDjYnIy20vfKRMQlw",
      Accept: "application/json",
    },
  };

  function handleStateChange(e) {
    setState(e.target.value);
    axios
      .get(
        `https://www.universal-tutorial.com/api/cities/${e.target.value}`,
        config
      )
      .then((res) => setDistrictData(res.data));
  }

  useEffect(() => {
    axios
      .get("https://www.universal-tutorial.com/api/states/India", config)
      .then((res) => setStateData(res.data))
      .catch((err) => console.log(err.message));
  }, [5]);
  return (
    <div>
      <Header />
      <div className="register">
        <Left isLogin={false} />
        <Right
          isLogin={false}
          state={state}
          stateData={stateData}
          districtData={districtData}
          handleStateChange={handleStateChange}
        />
      </div>
      <Footer />
    </div>
  );
}
