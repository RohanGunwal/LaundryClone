import "./App.css";
import Layout from './components/CommonLayoutAfterLogin/Layout';
import NoOrders from "./components/OrderHistory/NoOrders";

function App() {
  return <div className="App">
   <Layout>
   <NoOrders />
   </Layout>
  </div>;
}

export default App;
