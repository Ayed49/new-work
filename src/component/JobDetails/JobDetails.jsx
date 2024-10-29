import { Link, useLoaderData, useParams } from "react-router-dom";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../LocalStroage/LocalStroage";



const JobDetails = () => {
   const jobs = useLoaderData();
   const {id} = useParams();
   const idInt = parseInt(id);
   const job = jobs.find(job => job.id === idInt);
   console.log(job);

   const handleJobApply = () =>{
    saveJobApplication(idInt);
    toast('you have applied successfully');
   }

    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between">
            <img src="https://i.ibb.co.com/56rQVrR/bg1.png" alt="" />
            <h1 className="  text-4xl mt-16  font-extrabold"> Job Details</h1>
            <img className="rotate-180" src="https://i.ibb.co.com/56rQVrR/bg1.png" alt="" />
            </div>
            <div className="grid grid-cols-2 gap-4 p-5">
                <div>
                    <article>
                        <span className="text-xl font-extrabold">Job Description:</span>A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.
                    </article>

                    <article>
                        <span className="text-xl font-extrabold">Job Responsibility:</span> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.
                    </article>
                    <article>
                        <span className="text-xl font-extrabold">Educational Requirements:</span> <br />
                        <p>Bachelor degree to complete any reputational university.</p>
                    </article>
                    <article>
                        <span>Experiences:</span> <br />
                        <p>2-3 Years in this field.</p>
                    </article>
                </div>
                <div className="ml-8">
                    <div>
                        <h3>Job Details</h3>
                        <div>
                            <h2 className="flex gap-3"> <RiMoneyDollarCircleFill className="text-2xl"></RiMoneyDollarCircleFill>Salary : 100K - 150K (Per Month) </h2>

                            <h2 className="flex gap-3"> <MdDateRange className="text-2xl" />Job Title : Product Designer </h2>
                        </div>
                        <div>
                            <h2>Contact Information</h2>
                            <span className="">----------------------------</span>
                            <div>
                                <h1 className="flex"> <IoCall className="text-2xl" />Phone : 01750-00 00 00 </h1>

                                <h1 className="flex">  <MdEmail className="text-2xl" />Email : info@gmail.com </h1>

                                <h1 className="flex"><MdLocationOn className="text-2xl"/>Address : Dhanmondi 32, Sukrabad
                                Dhaka, Bangladesh </h1>

                            </div>
                            <Link> <button
                            onClick={handleJobApply}
                            className="btn btn-primary mt-14">Apply Now</button> </Link>
                        </div>
                        <ToastContainer />
                    </div>
                </div>
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