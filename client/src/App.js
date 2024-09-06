import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";

function App() {

  const [isLoggedIn,setIsLoggedIn]= useState(!!localStorage.getItem('token'));
  // useEffect(()=>{
  //   const token = localStorage.getItem('token');
  //   setIsLoggedIn(!!token);
  // },[isLoggedIn])
  

  return (
    <div className="App">
       <BrowserRouter>
          <Routes>

            <Route
              path="/"
              element={isLoggedIn? <Navigate to="/home" />: <LoginPage setIsLoggedIn={setIsLoggedIn}/>}
            />
            {/* <Route
            path="/home"
            element= {<HomePage setIsLoggedIn={setIsLoggedIn}/>}
            /> */}
            <Route
            path="/home"
            element={isLoggedIn ? <HomePage setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/" />}
            />

          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
