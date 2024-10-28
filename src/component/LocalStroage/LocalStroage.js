const getStoredJobApplication = () => {
    const stroedJobApplication = localStorage.getItem('job-applied');
    if(stroedJobApplication){
        return JSON.parse(saveJobApplication);
    }
    return [];

}

const saveJobApplication = id =>{
    const stroedJobApplications = getStoredJobApplication();
    const exists = stroedJobApplications.find(jobId => jobId === id);
    if(!exists){
        stroedJobApplications.push(id);
        localStorage.getItem('job-applied', JSON.stringify(stroedJobApplications));
    }
}


export { getStoredJobApplication, saveJobApplication }








// const getStoredJobApplication = () =>{
//     const storedJobApplication = localStorage.getItem('job-application');
//     if(storedJobApplication){
//         return JSON.parse(storedJobApplication);
//     }
//     return [];
// }


// const saveJobApplication = id =>{
//    const storedJobApplication = getStoredJobApplication();
//     const exists = storedJobApplication.find(jobId => jobId ===id);
//     if(!exists){
//         storedJobApplication.push(id);
//         localStorage.getItem('job-application', JSON.stringify(storedJobApplication))
//     }
    
// }

// export {getStoredJobApplication, saveJobApplication}