import { MdLocationOn } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";




const Job = ({job}) => {
    const {id, logo, job_title,company_name,remote_or_onsite,location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences} = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure className="p-5">
    <img
      src={logo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className="px-5 py-2 font-extrabold border rounded mr-4 border-[#7E90FE]">{remote_or_onsite}</button>
        <button className="px-5 py-2 font-extrabold border rounded mr-4 border-[#7E90FE]">{job_type}</button>
    </div>
    <div className="mt-4 flex">
        <h2 className="flex gap-2"><MdLocationOn className="text-2xl"/>{location}</h2>
        
            <h2 className="flex gap-2 ml-4"><RiMoneyDollarCircleFill className="text-2xl" />Salary : {salary}</h2>
        
    </div>
    <div className="card-actions">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    );
};

export default Job;