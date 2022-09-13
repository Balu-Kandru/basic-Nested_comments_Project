import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = ()=> {
    const navigate = useNavigate();
    const [login, setLogin] = useState({userName: "", password: ""})
    const handleSignup=()=>{
        navigate("/register");
    }
    const handleLogin = ()=> {
        axios({
            url: "http://localhost:3001/login",
            method: "POST",
            headers: {
            },
            data: {username: login.userName, password: login.password}
        }).then((loginData)=> {
           localStorage.setItem("authorization", loginData.data.authToken);
           navigate("/create")
        }).catch((err)=> {
            //console.log(err)
            alert(err.response.data)
        })
    }
    return (
        <>
            <div className="for-login" >
                <form className="for-logincenter">
                    <div>
                        <div>
                        <label htmlFor="username">Username:</label>
                        </div>
                        
                        <div>
                            <input id="username" type="text" onChange={(e)=> {setLogin({...login, userName: e.target.value})}}/>
                        </div>
                        <div>
                        <label for="username">Password:</label>
                        </div>
                        
                        <div>
                            <input id="password" type="password" onChange={(e)=> {setLogin({...login, password: e.target.value})}}/>
                        </div>
                    </div>
                    <button type="button" style = {{ paddingRight:15, paddingLeft: 15,margin : 10 }}onClick={handleLogin}>Login</button>
                    <div>
                    <a  onClick={handleSignup} className="anchor" >Signup ?</a>
                        </div>
                </form>
            </div>
        </>
    )
}

export default Login;