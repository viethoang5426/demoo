import {createSlice} from '@reduxjs/toolkit'

const initialState={
    currentUser:null,
    loading:false,
    error:false
}
export const useSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        loginStart:(state)=>{
            state.loading=true
        },
        loginSuccess:(state,action)=>{
            state.loading=false;
            state.currentUser=action.payload
        },
        loginFailure:(state)=>{
            state.loading=false;
            state.error=true
        },
        logOut:(state)=>{
            state.currentUser=null;
            state.loading=false;
            state.error=false
        }
    }
})

export const {loginStart,loginSuccess,loginFailure,logOut}=useSlice.actions
export default useSlice.reducer