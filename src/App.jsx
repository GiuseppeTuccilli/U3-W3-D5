import "./App.css";
import "../src/style/coustomBootstrap.scss";
import { Container, Row, Col } from "react-bootstrap";
import LeftCol from "./components/leftCol";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNavbar from "./components/MyNavbar";
import MyNavbar2 from "./components/MyNavbar2";
import Top from "./components/Top";
import Middle from "./components/midle";
import NuoveUscite from "./components/NuoveUscite";
import { Provider } from "react-redux";
import store from "./redux/store";
import Under from "./components/Under";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <Provider store={store}>
        <Row className="w-100 g-0">
          <Col xs={0} lg={2} className="d-none d-lg-flex">
            <LeftCol />
          </Col>
          <Col xs={12} md={12} lg={10}>
            <MyNavbar2 />
            <Top />
            <Middle />
            <NuoveUscite />
            <Under />
            <MyFooter />
          </Col>
        </Row>
      </Provider>
    </>
  );
}

export default App;
