import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getLocalstorgedata } from "../Utilities/Utility";

const Applied = () => {

    const [applied,setApplied] =useState([]);
    const [display,setDisplay] = useState([])


    const sorthandle =(filter) =>{
        if(filter === 'all'){
            setDisplay(applied)
        }
        else if(filter === 'remote'){
           const remote = applied.filter(job => job.remote_or_onsite === 'Remote')
           setDisplay(remote)
        }
        else if(filter === 'onsite'){
           const onsite =  applied.filter(job => job.remote_or_onsite === 'Onsite')
           setDisplay(onsite)
        }
    }

    const jobs= useLoaderData();
    useEffect(()=>{
        const appliedjobs= getLocalstorgedata();
        //    const show = jobs.filter(job=>appliedjobs.includes(job.id))

        //    setApplied(show)
         let container =[];
     for(const id of appliedjobs){
        const job = jobs.find(job=> job.id === id)
        container.push(job)

     }
     setApplied(container)
     setDisplay(container)
    },[])
    return (
        <div>
            <details className="dropdown mb-32">
  <summary className="m-1 btn">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li onClick={()=>sorthandle('all')}><a>AlL</a></li>
    <li onClick={()=>sorthandle('remote')}><a>Remote</a></li>
    <li onClick={()=>sorthandle('onsite')}><a>Onsite</a></li>
  </ul>
</details>
            {
                display.map(aa => <div key={aa.id}> {aa.remote_or_onsite}</div>)
            }
        </div>
    );
};

export default Applied;