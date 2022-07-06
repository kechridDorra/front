import React, {useState,createContext} from 'react';


export const AuthContext = createContext();

export const AuthProvider = props=>{
    const [authState, setauthState]= useState({
        id:'',
        nom: '',
        prenom: '',
        email: '',
        password: '',
        telephone: '',
        adresse:'',
        ville:'',
        codePostal:'',
        numeroCarte:'',
        codeSecurite:'',
        moisExp:'',
        anneeExp:'',
    });
    return(
        <AuthContext.Provider value={[authState,setauthState]}>
            {props.children}
        </AuthContext.Provider>

    );

};