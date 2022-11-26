import "./App.css";
import {  Routes} from "react-router-dom";
import {Route} from 'react-router';
import Layout from './components/CommonLayoutAfterLogin/Layout';
import NoOrders from "./components/OrderHistory/NoOrders";
import CreateOrder from "./components/CreateOrder/CreateOrder";

const App = () => {
  return <div className="App">
    <Routes>
    <Route exact path="/" element ={<Layout children = {<NoOrders/>} />}></Route>
    <Route path="/create" element={<Layout children = {<CreateOrder/>} />}></Route>
  </Routes>
  </div>;
}

export default App;
