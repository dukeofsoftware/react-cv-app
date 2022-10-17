import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import store from "../redux/store";

export const GeneratedPdf = () => {
  let [state, setState] = useState({
    formInput: store.getState().forms.formInput,
  });

  store.subscribe(() => {
    /*  console.log(store.getState().forms.formInput); */
    setState({
      formInput: store.getState().forms.formInput,
    });
  });

  /*  formInput:{
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
    } */
  return (
    <div>
      <pre>{JSON.stringify(state.formInput)}</pre>
      {/* Header */}
      <div></div>

      {/* sol taraf */}
      <div>
      {/* Fotoğraf */}
      <img src="" alt="Fotoğraf" />


        {/* Kişisel Bilgiler */}
        <div></div>

      </div>

      {/* sağ taraf */}
      <div>
        {/* Experience */}
        <div></div>

        {/* Education */}
        <div></div>
        
      </div>
    </div>
  );
};
