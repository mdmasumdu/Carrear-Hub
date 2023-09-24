
import { useEffect, useState } from "react";
import Fjob from "./Fjob";


const Featuredjobs = () => {

    const [jobs,setJobs] = useState([])

    const [datalength,setDatalength] = useState(4)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <div>
            <div className="text-center text-black">
            <h1 className="text-5xl font-bold">Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
           
           <div className="grid grid-cols-2 gap-5 p-5">
            {
                jobs.slice(0,datalength).map(job=><Fjob key={job.id} job={job}></Fjob>)
            }
           </div>

           <div className="flex justify-center">
           <div className={datalength === jobs.length && 'hidden'}>
            <button className="btn bg-[#7E90FE] text-black" onClick={()=>setDatalength(jobs.length)}>Show All</button>
           </div>
           </div>
            
        </div>
    );
};

export default Featuredjobs;