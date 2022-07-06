import React, { Component } from 'react';
import axios from 'axios';
class AppContext extends Component{
   
constructor() {
    super()
    this.state = {
        todos: [],
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || ""
    }
}
signup = (userInfo) => {
    return axios.post("/inscription", userInfo)
    .then(response => {
        const { user, token } = response.data
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        this.setState({
            user,
            token
        });
        return response;
    })
}
login = (credentials) => {
    return axios.post("/api/login_check", credentials)
        .then(response => {
            const { token, user } = response.data;
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            this.setState({
                user,
                token
            });
            
            // Don't forget to get this newly-logged-in user's todos!
           // this.getUsers();
            return response;
        })
}


render() {
    return (
        <AppContext.Provider
            value={{
                
                signup: this.signup,  // add this to the value object
                
            }}
        >
            {this.props.children}
        
            value={{
    
            login: this.login,
    
            }}
        </AppContext.Provider>
    );
}}
export default AppContext;
export const withContext = React.createContext(
    ) // valeur par défaut
   