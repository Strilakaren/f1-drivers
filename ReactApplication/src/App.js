import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import Drivers from "./pages/Drivers";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App flex flex-col items-center">
      <HeaderComponent />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/drivers"} element={<Drivers />} />
      </Routes>
    </div>
  );
}

export default App;
