import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect( () =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    } ,[])
    
    return (
        <div>
            <div>
                <h1 className="text-6xl text-center font-extrabold">Featured Jobs</h1>
                <p className="text-center mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {
                   jobs.map(job => <Job
                   key={jobs.id}
                   job={job}></Job>) 
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;

