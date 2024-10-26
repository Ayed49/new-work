

const HomeBanner = () => {
    return (
        <div>
            <div className="flex justify-between">
                <div className="content-center">
                <h1 className="font-extrabold text-6xl">One Step Closer To Your <br />
            <span className="text-lime-400 font-extrabold mt-">Dream Job</span>
            </h1>
            <div className="mt-3">
            <p>Explore thousands of job opportunities with all the </p>
            <p>information you need. Its your future. Come find it. Manage all </p>
            <p>your job application from start to finish.</p>
            </div>
           

            <button className="bg-lime-400 p-3 rounded-md font-semibold mt-4">Get Started</button>
                </div>
            

            <img className="w-1/4" src="https://i.ibb.co.com/2sKDspv/user.png" alt="" />
        </div>
        </div>
        
    );
};

export default HomeBanner;