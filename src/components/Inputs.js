import React,{useState} from 'react'
import { Input,Textarea,Button} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import {updateState} from "../redux/features/generateForm.feature"



 const Inputs = () => {

/*   let [state,setState] = useState({
    formState:{
      firstName :"",
      lastName:"",
      title:"",
      phoneNumber:"",
      adress:"",
      email:"",
      message:"",
      position:"",
      company:"",
      city:"",
      from:"",
      to:"",
      universityName:"",
      universityCity:"",
      degree:"",
      subject:"",
      universityFrom:"",
      universityTo:"",
  }
  }) */

 /*  let updateInput = (event)=>{
    setState(prevState=>({
      formState:{
        ...prevState.formState,
        [event.target.name]: event.target.value,

      }
    })
     
      )
  } */

  let dispatch = useDispatch();

  
  let formState=useSelector((state)=>{
    return state["forms"];
   })
   let {forms} = formState

   let updateInput= (event)=>{
    let myEvent={
      [event.target.name]:event.target.value,
      [event.target.name]:event.target.value
    }
    dispatch(updateState(myEvent))
   }

  return (
    <div className='container mx-auto mt-5 '>
  <pre>{JSON.stringify(forms)}</pre>
    <form>
    <div className='flex flex-col gap-5 p-5 shadow-lg'>
      
        <Input  type="text" onChange={updateInput} variant='outlined ' name='firstName'  label='First name'/>
        <Input  type="text" onChange={updateInput} variant='outlined ' name='lastName' label='Last name' />
        <Input  type="text" onChange={updateInput} variant='outlined ' name='title' label='Title'  />
        <Input  type="file" variant='outlined ' label='Photo'  />
        <Input  type="text" onChange={updateInput} variant='outlined ' name='adress' label='Address' />
        <Input  type="text" onChange={updateInput} variant='outlined ' name='phoneNumber' label='Phone Number' />
        <Input  type="text" onChange={updateInput} variant='outlined ' name='email' label='Email'  />
        <Textarea onChange={updateInput} name='message' label="Message" />
    </div>

    <div className="flex flex-col gap-5 p-5 shadow-lg">
      
        <h1 className='h3'>Experience</h1>
        <Input  type="text" onChange={updateInput} variant='outlined ' name='position' label='Position'  />
        <Input  type="text" onChange={updateInput} variant='outlined ' name='company' label='Company'  />
        <Input  type="text" onChange={updateInput} variant='outlined ' name='city' label='city'  />
        <Input  type="text" onChange={updateInput} variant='outlined ' name='from' label='From' />
        <Input  type="text" onChange={updateInput} variant='outlined ' name='to' label='To'  />
        <Button size="md" color="red">Delete</Button>
        <Button size="md" color="green">Add</Button>
    </div>
    
      <div className="flex flex-col gap-5 p-5 shadow-lg">
        <h1 className="h3">Education</h1>
        <Input type="text" onChange={updateInput} variant='outlined ' name='universityName' label='University name'  />
        <Input type="text" onChange={updateInput} variant='outlined ' name='universityCity' label='City'  />
        <Input type="text" onChange={updateInput} variant='outlined ' name='degree' label='Degree'  />
        <Input type="text" onChange={updateInput} variant='outlined ' name='subject' label='Subject'  />
        <Input type="text" onChange={updateInput} variant='outlined ' name='universityFrom' label='From'  />
        <Input type="text" onChange={updateInput} variant='outlined ' name='universityTo' label='To'  />
      </div>

      {/* button */}
      <div className="flex flex-col gap-5 p-5 shadow-lg">
        <Button size="md" color="red">Delete</Button>
        <Button size="md" color="green">Add</Button>
        <Button size="md" color="amber">Generate</Button>
        <Button size="md" color="red">Reset</Button>
      </div>
    </form>
  </div>
  )
}
export default Inputs;