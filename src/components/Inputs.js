import React, { useState } from "react";
import { Input, Textarea, Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { updateEducationState, updateExperienceState, updateState } from "../redux/features/generateForm.feature";

const Inputs = () => {
  let dispatch = useDispatch();

  let [state, setState] = useState({
    eğitimler: {
      universityName: "",
      universityCity: "",
      degree: "",
      subject: "",
      universityFrom: "",
      universityTo: "",
    },
    experience: {
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  });
  let changeInputs = (event) => {
    setState({
      ...state,
      experience: {
        ...state.experience,
        [event.target.name]: event.target.value,
      },
    });

  };
let addExperienceInput= ()=>{
  dispatch(updateExperienceState(state.experience))

}
  let changeEducationInputs = (event) => {
    setState({
      ...state,
      eğitimler: {
        ...state.eğitimler,
        [event.target.name]: event.target.value,
      },
    });

  };
  let addEducationInput = ()=>{
    dispatch(updateEducationState(state.eğitimler))

  }

  let updateInput = (event) => {
    let myEvent = {
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
    };
    dispatch(updateState(myEvent));
  };


  
  return (
    <div className="min-w-[400px] max-w-[700px]  mx-auto ">
      <form>
        {/* Kişisel Bilgiler */}
        <div className="flex flex-col gap-5 p-5 shadow-lg">
          <Input
            type="text"
            onChange={updateInput}
            variant="outlined"
            name="firstName"
            label="First name"
          />
          <Input
            type="text"
            onChange={updateInput}
            variant="outlined"
            name="lastName"
            label="Last name"
          />
          <Input
            type="text"
            onChange={updateInput}
            variant="outlined"
            name="title"
            label="Title"
          />
          <Input type="text" label="Photo" name="photo" onChange={updateInput}/>
          <Input
            type="text"
            onChange={updateInput}
            variant="outlined"
            name="adress"
            label="Address"
          />
          <Input
            type="text"
            onChange={updateInput}
            variant="outlined"
            name="phoneNumber"
            label="Phone Number"
          />
          <Input
            type="text"
            onChange={updateInput}
            variant="outlined"
            name="email"
            label="Email"
          />
          <Textarea onChange={updateInput} name="message" label="Message" />
        </div>
        {/* Tecrübeler  */}
        <div className="flex flex-col gap-5 p-5 shadow-lg">
          <h1 className="h3">Experience</h1>
          <Input
            type="text"
            onChange={changeInputs}
            variant="outlined"
            name="position"
            label="Position"
          />
          <Input
            type="text"
            onChange={changeInputs}
            variant="outlined"
            name="company"
            label="Company"
          />
          <Input
            type="text"
            onChange={changeInputs}
            variant="outlined"
            name="city"
            label="city"
          />
          <Input
            type="text"
            onChange={changeInputs}
            variant="outlined"
            name="from"
            label="From"
          />
          <Input
            type="text"
            onChange={changeInputs}
            variant="outlined"
            name="to"
            label="To"
          />
        </div>
        {/* Butonlar */}
        <div className="flex flex-col gap-5 p-5 shadow-lg">
        
          <Button color="green" variant="gradient" onClick={addExperienceInput}>
            Ekle
          </Button>
        </div>
        <div className="flex flex-col gap-5 p-5 shadow-lg">
          <h1 className="h3">Education</h1>
          <Input
            type="text"
            onChange={changeEducationInputs}
            variant="outlined"
            name="universityName"
            label="University name"
          />
          <Input
            type="text"
            onChange={changeEducationInputs}
            variant="outlined"
            name="universityCity"
            label="City"
          />
          <Input
            type="text"
            onChange={changeEducationInputs}
            variant="outlined"
            name="degree"
            label="Degree"
          />
          <Input
            type="text"
            onChange={changeEducationInputs}
            variant="outlined"
            name="subject"
            label="Subject"
          />
          <Input
            type="text"
            onChange={changeEducationInputs}
            variant="outlined"
            name="universityFrom"
            label="From"
          />
          <Input
            type="text"
            onChange={changeEducationInputs}
            variant="outlined"
            name="universityTo"
            label="To"
          />
           <div className="flex flex-col gap-5 p-5 shadow-lg">
         
          <Button color="green" variant="gradient" onClick={addEducationInput}>
            Ekle
          </Button>
        </div>
        </div>
      </form>
    </div>
  );
};
export default Inputs;
