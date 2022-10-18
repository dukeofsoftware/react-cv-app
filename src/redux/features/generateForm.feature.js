
import {createSlice} from "@reduxjs/toolkit";


const initialState = {
   
    formInput:{
        firstName :"John ",
        lastName:"Doe",
        title:"Senior Web Developer",
        photo:"",
        phoneNumber:"123456789",
        adress:"Example Street 10",
        email:"john.doe@gmail.com",
        message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ex sequi, fugit excepturi reiciendis commodi ab eveniet asperiores consequatur laboriosam.",

        experience:[{

            position:"Senior Web Developer",
            company:"Facebook Inc., Menlo Park",
            city:"İstanbul",
            from:"2015",
            to:"Present",
    
            }],
      education:[  
        {

        universityName:"University of Technology",
        universityCity:"Oklahoma",
        degree:"Master",
        subject:"Science",
        universityFrom:"2008",
        universityTo:"2010",
        }]
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
        updateExperienceState:function(state,action){
            console.log(action.payload)
            state.formInput.experience.push(action.payload)
        },
        updateEducationState:function(state,action){
            console.log(action.payload);
            state.formInput.education.push(action.payload)
        }
       
        
    }
});
export const {updateState,updateEducationState,updateExperienceState} = generateSlice.actions;
export default generateSlice.reducer;