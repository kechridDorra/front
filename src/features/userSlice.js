import {createSlice} from '@reduxjs/toolkit'
 
export const userSlice = createSlice({
    name:"user",
    initialState:{value : {
        email: "",
        nom: "",
        prenom : "", 
        adresse:""
    }},
    reducers:{
        login:(state,action)=>
        {state.value = action.payload}
    }
})

export const { login } = userSlice.reducer

export default userSlice.reducer