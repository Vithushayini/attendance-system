import './LoginPage.css';

import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function LoginPage(){
    const initialStateErrors = {
        username:null,
        password:null
    };
    const [errors,setErrors]=useState(initialStateErrors);

    const [error,setError]=useState(null);

    const [loading,setLoading]=useState(false);

    const [inputs,setInputs]=useState({
        username:"",
        password:""
    })

    const navigate = useNavigate();

    const handleInput= (event)=>{
        setInputs({...inputs,[event.target.name]:event.target.value})
    }

    const handleSubmit=async (event)=>{
        event.preventDefault();
        let errors =initialStateErrors; 
        // setErrors(initialStateErrors);
        
        if(inputs.username == ""){
            errors.username="username required";
        }
        if (inputs.password == "") {
            errors.password="password required";
        }

        if(inputs.username && inputs.password){
            setLoading(true)

            console.log('Sending API request with inputs:', inputs);
            try{
                const response= await axios.post('http://localhost:8000/api/v1/login',{
                    username:inputs.username,
                    password:inputs.password
                });
                localStorage.setItem('token',response.data.token);
                //navigate to home page
                navigate('/home');
            }catch(error){
                setError("invalid username or password")
                
                console.log(error);
                
            }finally{
                setLoading(false);
            }
            
        }


        setErrors({...errors});
        
    }


    return (
        <div className="login-page-container">
            <section className="login-block">
                <div className="login-container">
                    <div className="login-content">
                        <h2 className="login-title">Login Now</h2>
                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="form-group">
                                <label htmlFor="username" className="login-label">Username</label>
                                <input
                                    type="text"
                                    className="login-input"
                                    onChange={handleInput}
                                    name="username"
                                    placeholder="Enter your username"
                                />
                                 { errors.username?
                                (<span className="error-message" >
                                    {errors.username}
                                </span>):null
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="login-label">Password</label>
                                <input
                                    type="password"
                                    className="login-input"
                                    onChange={handleInput}
                                    name="password"
                                    placeholder="Enter your password"
                                />
                               
                                { errors.password?
                                (<span className="error-message" >
                                    {errors.password}
                                </span>):null
                                }
                            </div>
                            <div className="form-group">
                            {loading ?
                                (<div  className="loading-container">
                                    <div className="loading-spinner">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>):null
                                }
                                <span className="error-message" >
                                { error?
                                (<p>{error}</p>)
                                :null
                                }
                                </span>
                                 

                                <input type="submit" className="login-btn" disabled={loading} value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );

}