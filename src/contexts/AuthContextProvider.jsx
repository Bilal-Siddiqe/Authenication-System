import React, { createContext, useState } from 'react'

const AuthContext = createContext();

function AuthContextProvider({ children }) {

    let [login, setLogin] = useState(true);


    return (
        <div>
            <AuthContext.Provider value={{login, setLogin}}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}
export default AuthContextProvider;
export { AuthContext };