import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({children}) {
    const [usuarios, setUsuarios] = useState([]);
    const [usuarioLogado, setUsuarioLogado] = useState(null);

    return (
        <AuthContext.Provider
          value={{
            usuarios,
            setUsuarios,
            usuarioLogado,
            setUsuarioLogado,
          }}
          
        >
            {children}
        </AuthContext.Provider>  

    );
}

export function useAuth() {
    return useContext(AuthContext);
}