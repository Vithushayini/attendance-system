import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/home" element={<HomePage/>}/>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
