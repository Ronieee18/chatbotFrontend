import { createContext, useContext, useEffect, useState } from "react";
import { checkStatus, loginUser, logoutUser, signUpUser } from "../components/helper/api";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    

    useEffect(()=>{
        async function checkAuthStatus(){
            const data=await checkStatus();
            if(data){
                setUser({email:data.user.email,name:data.user.name});
                setIsLoggedIn(true);
            }
        }
        checkAuthStatus();    
    },[])

    const login = async (email, password) => {
        // Your login logic here
        const data=await loginUser(email,password);
        if(data){
            setUser({email:data.email,name:data.name});
            setIsLoggedIn(true);
        }
    };

    const signup = async (name, email, password) => {
        // Your signup logic here
        const data=await signUpUser(name,email,password);
        if(data){
            setUser({email:data.email,name:data.name});
            // setIsLoggedIn(true);
        }
    };

    const logout = async () => {
        // Your logout logic here
        await logoutUser();
        setUser(null);
        setIsLoggedIn(false);
        window.location.reload();
    };

    const userAuth = {
        isLoggedIn,
        user,
        login,
        signup,
        logout
    };

    return <AuthContext.Provider value={userAuth}>{children}</AuthContext.Provider>;
};
export { AuthProvider, AuthContext };

