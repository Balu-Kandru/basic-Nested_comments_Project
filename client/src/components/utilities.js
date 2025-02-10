import { Navigate } from "react-router-dom";

const Protected = ({children})=> {
    const token = localStorage.getItem("authorization");

    return (
        <>
        {token.length ? children: <Navigate to="/login"/>}
        </>
    )
}

const baseUrl = process.env.baseUrl || 'http://localhost:3001';

export { 
    Protected, baseUrl
};