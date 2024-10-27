import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
   const jobs = useLoaderData();
   const {id} = useParams();
   const idInt = parseInt(id);
   const job = jobs.find(job => job.id === idInt);
   console.log(job);
    return (
        <div>
            <h1>Job Details : {id}</h1>
        </div>
    );
};

export default JobDetails;


// const jobs = useLoaderData();
//    const {id} =useParams();
//    const idInt = parseInt(id)
//    const job = jobs.find(job => job.id === idInt);
//    console.log(job);