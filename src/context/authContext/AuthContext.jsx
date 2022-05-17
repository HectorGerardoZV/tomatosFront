import { useState, useEffect, createContext } from 'react'
import axiosClient from "../../config/axiosClient"
const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    const [userAuth, setUserAuth] = useState(null);

    const handleDoLogin = async (user) => {
        try {
            const response1 = await axiosClient.post("/login", user);
            const { data } = response1;
            const { token } = data;
            const response2 = await axiosClient.get("/login", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const userLoged = response2.data;
            setAuth(data);
            setUserAuth(userLoged);
            return {access: true, user:userLoged};
        } catch (error) {
            return {access: false, user:null};
        }
    }



    return (
        <AuthContext.Provider
            value={{
                auth,
                userAuth,
                handleDoLogin
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }

export default AuthContext