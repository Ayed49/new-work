import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../LocalStroage/LocalStroage";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    useEffect( () => {
        const storedJobsIds = getStoredJobApplication();
        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job => storedJobsIds.includes(job.id));
            console.log(jobs,storedJobsIds,jobsApplied);
        }
    } , [])
    return (
        <div>
            
        </div>
    );
};

export default AppliedJobs;