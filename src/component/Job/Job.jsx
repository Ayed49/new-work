

const Job = ({job}) => {
    const {id, logo, job_title,company_name,remote_or_onsite,location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences} = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure>
    <img
      src={logo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Job;