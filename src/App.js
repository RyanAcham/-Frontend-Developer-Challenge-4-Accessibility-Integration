import "bootstrap/dist/css/bootstrap.css"
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./comp/header";
import TestPage from "./comp/test";
import Footer from "./comp/footer";


function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route exact path="/" element={<TestPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;