
import Left from "../left/Left";
import Right from "../Rigth/Right"
import "./Login.css";

export default function Login(props) {
  return (
    <div>
    
      <div className="login">
        <Left isLogin={true} />
        <Right isLogin={true} stateData={[]} districtData={[]} />
      </div>
    
    </div>
  );
}