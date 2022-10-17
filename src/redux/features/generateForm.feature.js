
import {createSlice} from "@reduxjs/toolkit";



const initialState = {
   
    formInput:{
        firstName :"Emre",
        lastName:"Kozan",
        title:"CV",
        phoneNumber:"05050588123",
        adress:"Üsküdar",
        email:"kozanfurkanemre@gmail.com",
        message:"Deneme",
        position:"sunior developer",
        company:"Haydarpaşa Lisesi",
        city:"İstanbul",
        from:"",
        to:"",
        universityName:"",
        universityCity:"",
        degree:"",
        subject:"",
        universityFrom:"",
        universityTo:"",
    }

}

let generateSlice = createSlice({
    name : 'generateForm',
    initialState : initialState,
    reducers : {
        updateState: function (state , action){
            /* state.formInput=action.payload; */
            let girdiKey=Object.keys(action.payload)[0]
            let girdiValue=Object.values(action.payload)[0]
            state.formInput={
                ...state.formInput,
                [girdiKey]:girdiValue

            }

        },
       
        
    }
});
export const {updateState} = generateSlice.actions;
export default generateSlice.reducer;