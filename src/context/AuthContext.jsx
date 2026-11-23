import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({children}) {
    const [usuarios, setUsuarios] = useState([]);
    const [usuarioLogado, setUsuarioLogado] = useState(null);

    function cadastrar(novoUsuario) {
        setUsuarios([...usuarios, novoUsuario]);
    }

    function login(email, senha) {
        const usuario = usuarios.find(
            (u) => u.email === email && u.senha === senha
        );
        
        if (usuario) {
            setUsuarioLogado(usuario);
            return true;
        }
        
        return false;
    }

    function logout() {
        setUsuarioLogado(null);
    }

    return (
        <AuthContext.Provider
          value={{
            usuarios,
            setUsuarios,
            usuarioLogado,
            setUsuarioLogado,
            cadastrar,
            login,
            logout,
          }}
          
        >
            {children}
        </AuthContext.Provider>  

    );
}

export function useAuth() {
    return useContext(AuthContext);
}