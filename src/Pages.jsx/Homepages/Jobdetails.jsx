/* eslint-disable react/no-unknown-property */
import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveLocalstorage } from "../../Utilities/Utility";


const Jobdetails = () => {

    const data = useLoaderData()

    const {id} = useParams()
    const idx = parseInt(id)
    const job = data.find(mata => mata.id === idx)

    const{contact_information,experiences,educational_requirements,job_responsibility,job_description,job_title,salary} =job


    const applyHanlder =()=>{
        saveLocalstorage(idx)
     toast("You have succesfully added");
    }
    return (
        <div>
            <h1 className="text-center text-5xl font-bold text-black mb-10">Job details</h1>

            <div className="grid grid-cols-4 text-black">
                <div className="col-span-3 border border-red-700 p-5">
                    <h1 className="text-3xl"><span className="font-bold">Job description:</span> {job_description}</h1>
                    
                    <h1 className="text-3xl mt-10"><span className="font-bold">Job Responsibility:</span>{job_responsibility}</h1>
                    <h1 className="text-3xl my-10"><span className="font-bold">Educational Qualification:</span>{educational_requirements}</h1>

                    <h1 className="text-3xl"><span className="font-bold">Experiences:</span>{experiences}</h1>
                    
                </div>
                <div className="bg-[#7E90FE] shadow-4xl">
                    <h1 className="text-2xl font-semibold p-5 text-white">Job Details</h1>
                    <hr />
{/* ok */}
                   <div className="flex flex-col gap-5 p-5">

                   <div className="flex text-white mt-5 gap-5">
                    <svg className="bg-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V18M9 15.182L9.879 15.841C11.05 16.72 12.949 16.72 14.121 15.841C15.293 14.962 15.293 13.538 14.121 12.659C13.536 12.219 12.768 12 12 12C11.275 12 10.55 11.78 9.997 11.341C8.891 10.462 8.891 9.038 9.997 8.159C11.103 7.28 12.897 7.28 14.003 8.159L14.418 8.489M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="url(#paint0_linear_7_406)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_7_406" x1="3" y1="11.8615" x2="21" y2="11.8615" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#7E90FE"/>
                    <stop offset="1" stop-color="#9873FF"/>
                    </linearGradient>
                    </defs>
                    </svg>
                    <span>Salary:</span> <span>{salary} (per month)</span> 
                    </div>


{/* Job title */}
                    <div className="flex gap-5 text-white">
                    <svg className="bg-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75M12 12.75H12.008V12.758H12V12.75ZM12 15H12.008V15.008H12V15ZM12 17.25H12.008V17.258H12V17.25ZM9.75 15H9.758V15.008H9.75V15ZM9.75 17.25H9.758V17.258H9.75V17.25ZM7.5 15H7.508V15.008H7.5V15ZM7.5 17.25H7.508V17.258H7.5V17.25ZM14.25 12.75H14.258V12.758H14.25V12.75ZM14.25 15H14.258V15.008H14.25V15ZM14.25 17.25H14.258V17.258H14.25V17.25ZM16.5 12.75H16.508V12.758H16.5V12.75ZM16.5 15H16.508V15.008H16.5V15Z" stroke="url(#paint0_linear_7_412)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_7_412" x1="3" y1="11.8615" x2="21" y2="11.8615" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#7E90FE"/>
                    <stop offset="1" stop-color="#9873FF"/>
                    </linearGradient>
                    </defs>
                    </svg>
                    <span>Job title:</span> <span>{job_title}</span>

                    </div>
                    
                   </div>

                         <h1 className="text-3xl font-bold mt-10 text-white">Contact Information:</h1>
                         <hr />
                    <div className="text-2xl text-white p-5">
                       <h1> Phone:  {contact_information.phone}</h1>
                       <h1> Email:  {contact_information.email}</h1>
                       <h1> Address:  {contact_information.address}</h1>


                       <div className="flex justify-center mt-10">
                       <button className="btn bg-blue-600" onClick={applyHanlder}>  APPLY NOW</button>

                       </div>
                       <ToastContainer />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Jobdetails;