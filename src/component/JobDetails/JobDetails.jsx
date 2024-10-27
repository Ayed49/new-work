import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
   const jobs = useLoaderData();
   const {id} = useParams();
   const idInt = parseInt(id);
   const job = jobs.find(job => job.id === idInt);
   console.log(job);
    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex">
            <img src="https://i.ibb.co.com/56rQVrR/bg1.png" alt="" />
            <h1 className=" text-center text-4xl font-extrabold"> Job Details : {id}</h1>
            <img className="rotate-180 ml-96" src="https://i.ibb.co.com/56rQVrR/bg1.png" alt="" />
            </div>
           
            

            {/* <div className="grid md:grid-cols-4 gap-4">


                <div className="border md:col-span-3">
                    <div className="border">

                    </div>

                </div>

            </div> */}
        </div>
    );
};

export default JobDetails;


// const jobs = useLoaderData();
//    const {id} =useParams();
//    const idInt = parseInt(id)
//    const job = jobs.find(job => job.id === idInt);
//    console.log(job);