import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = ()=> {
    const navigate = useNavigate();
    const gotosignin = ()=>{
        navigate("/");
    }
    const [signupState, setSignupState] = useState({});
    const signUpFormData = [{attr: "username", type: "text", id: "username", label: "Username:"},
                            {attr: "password", type: "password", id: "password", label: "Password:"}]
    const handleUserAdd = ()=> {
        if(signupState.username.length===0 || signupState.password.length===0){
            alert("please enter all the fields")
        }else{
            axios({
                url: `${baseUrl}/signup`,
                method: "POST",
                headers: {
                },
                data: signupState
            }).then((res)=> {
                alert(res.data)
                navigate("/")
            }).catch((err)=> {
                alert(err.response.data)
            })
        }
        
    }
    const handleInputChange = (e, id)=> {
        setSignupState({...signupState, [id]: e.target.value})
    }
    return (
        <>
            <div className="for-login" >
                <form className="for-logincenter">
                    {signUpFormData.map((formKey,i)=> {
                        return (
                            <div key={i}>
                                <div>
                                    <label htmlFor={formKey.id}>{formKey.label}</label>
                                </div>
                                <div>
                                    <input type={formKey.type} id={formKey.id} onChange={(e)=> {handleInputChange(e,formKey.id)}}/>
                                </div>
                            </div>
                        )
                    })}
                
                <button type="button" style = {{ paddingRight:15, paddingLeft: 15,margin : 10 }} onClick={handleUserAdd}>Signup</button>
                <div><a onClick={gotosignin} className="anchor" >Login ?</a></div>
                </form>
            </div>
        </>
    )
}
export default Signup;