import { useState } from "react";
import './Contact.css'
import PersonalInfo from "./PersonalInfo";
import SelectCategory from "./SelectCategory";
import Other from "./Other";
import Swal from "sweetalert2";
import Comple from "./Comple";


const Contact = () => {
  const [page, setPage] = useState(0)
  const [status, setStatus]=useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: '',
    comment: '',
    ratings: '',
  });

  const formTitles = ['Personal Info', 'Message', 'Comment', 'Finish'];

  const displayStep = () =>{
    if(page === 0){
      return <PersonalInfo setFormData={setFormData} formData={formData}></PersonalInfo>
    }
    else if(page === 1){
      return <SelectCategory setFormData={setFormData} formData={formData}></SelectCategory>
              
    }
    else if(page === 2){
     return <Other setFormData={setFormData} formData={formData}></Other>
    }
    else{
      return <Comple></Comple>
    }
  }





  return (
    <div className="flex contact ">
      <div className="contact-img w-1/2 p-4">


      </div>
      <div className="w-1/2 bg-slate-100 p-6 shadow-xl">
        <div className="container mx-auto my-8">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>

          <p>
            If you have any questions or would like to schedule an appointment, feel free to{' '}
            <a href="/contact" className="text-blue-500 hover:underline">
              contact us
            </a>
            . We look forward to serving you and your car!
          </p>
          <div className="progressbar py-6">
            <ul className="steps w-full">
              <li 
              data-content={page===0 && page < 1 ? "?":"✓"}
               className={` step step-neutral ${page===0 && page < 1? '': 'green'}`}
               >{formTitles[0]}</li>
              <li data-content={page===1 || page < 2 ? "?":"✓"}  className={` step step-neutral ${page===1 || page < 2? '': 'green'}`}>{formTitles[1]}</li>
              <li data-content={page===2 || page < 3 ? "?":"✓"} className={` step step-neutral ${page===2 || page < 3? '': 'green'}`}>{formTitles[2]}</li>
              <li data-content={status === true? "✓":"?"} className={` step step-neutral ${status===true? 'green': ''}`}>{formTitles[3]}</li>
              
            </ul>
          </div>
          <div className="data-container p-4 ">
            <div className="header-progressbar">
              <h1 className="text-3xl">
                {formTitles[page]}
              </h1>
            </div>
            <div className="form-body p-6">
              {
               displayStep()
              }
            </div>
            <div className="footer-progressbar gap-4 flex">
              <button className="btn btn-outline" disabled={page ===0} onClick={() =>
              {setStatus(false)
                setPage(current => (current - 1))
              }
                
                }>Pre</button>
              <button 
              
              className="btn btn-outline"
               onClick={() => {
                if(page ===formTitles.length - 1){

                 
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: 'Submit your message',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  setStatus(true)
                  console.log(formData)

                }
                else{
                  setPage(current => (current + 1))

                }}
               
               }>
                {page === formTitles.length -1 ?"Submit": "Next"}
                </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
