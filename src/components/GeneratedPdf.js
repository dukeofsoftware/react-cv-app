import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import store from "../redux/store";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
export const GeneratedPdf = () => {
  let [state, setState] = useState({
    formInput: store.getState().forms.formInput,
  });
  const printRef = React.useRef();

  store.subscribe(() => {
    setState({
      formInput: store.getState().forms.formInput,
    });
  });

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  };

  return (
    <div className="container mx-auto">
      <div ref={printRef} className="w-[794px] h-[1222px] mx-auto  ">
        <div className="bg-blue-700 w-auto h-24 p-2 ">
          <h1 className="text-3xl text-white ml-7">
            {state.formInput.firstName}
          </h1>
          <h1 className="text-2xl text-white ml-7 mt-3">
            {state.formInput.title}
          </h1>
        </div>
        <div className="grid grid-cols-12 h-[1122px] ">
          {/* sol taraf */}
          <div className="col-span-4">
            {/* Kişisel Bilgiler */}
            <div className="  flex h-[1122px] flex-col gap-3 bg-blue-gray-50 p-5 border-r-2  border-black">
              <img src={state.formInput.photo} alt="Fotoğraf" className="rounded-full w-36 h-36"/>
              
              <h1 className="text-2xl">Name</h1>
              <h1 className="text-xl">
                {state.formInput.firstName + " " + state.formInput.lastName}
              </h1>
              <h1 className="text-2xl">E-mail</h1>
              <h1 className="">{state.formInput.email}</h1>
              <h1 className="text-2xl">Phone number</h1>
              <h1 className=""> {state.formInput.phoneNumber} </h1>
              <h1 className="text-2xl">Adress</h1>
              <h1 className=""> {state.formInput.adress} </h1>
              <h1 className="text-2xl">Description</h1>
              <h1 className=""> {state.formInput.message} </h1>
            </div>
          </div>
          {/* sağ taraf */}
          <div className="col-span-8 h-full bg-blue-gray-50 p-4 pb-0 ">
            {/* Experience */}
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">Deneyimler</h1>
              <div className="flex flex-col">
                {state.formInput.experience.length > 0 &&
                  state.formInput.experience.map((input) => {
                    return (
                      <ul className="mb-3" key={input.universityCity}>
                        <li>
                          
                          <span className="font-bold">Position: </span>
                          {input.position}
                        </li>
                        <li className="">
                          <span className="font-bold">Company:</span>
                          {input.company}
                        </li>
                        <li>
                          <span className="font-bold">City: </span>
                          {input.city}
                        </li>
                        <li>{input.from + " - " + input.to}</li>
                      </ul>
                    );
                  })}
              </div>
              <h1 className="text-xl font-bold mt-4">Education</h1>
              {state.formInput.education.length > 0 &&
                state.formInput.education.map((input) => {
                  return (
                    <ul className="mb-3" key={input.universityCity}>
                      <h1 className="font-bold">University Name</h1>
                      <li>{input.universityName}</li>
                      <li>
                        <span className="font-bold">City: </span>
                        {input.universityCity}
                      </li>
                      <li>
                        <span className="font-bold">Degree: </span>
                        {input.degree}
                      </li>
                      <li>
                        <span className="font-bold">Subject: </span>
                        {input.subject}
                      </li>
                      <li>
                        {input.universityFrom + " - " + input.universityTo}
                      </li>
                    </ul>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-96">
        <Button className="text-xl p-3 mx-auto w-96" color="amber" variant="gradient" onClick={handleDownloadPdf}>
          Download
        </Button>
      </div>
    </div>
  );
};
