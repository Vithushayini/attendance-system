import '../pages/HomePage.css';

import {useNavigate} from 'react-router-dom';

export default function HomePage({setIsLoggedIn}){
    const navigate = useNavigate();

    const handleLogout = ()=>{
        localStorage.removeItem('token');
        setIsLoggedIn(false)
        navigate('/');
    }

    return(
        <div className="home-container">
            <h1 className="home-title">Welcome to home page</h1>
            <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
        

    )
}
