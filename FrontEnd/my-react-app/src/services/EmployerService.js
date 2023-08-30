import axios from 'axios';
const baseUrl="http://localhost:8080";

class EmployerService{
    checkLogin(user){
        return axios.post(baseUrl+"/recruiter/login",user)
    }

    getEmployer(userName){
        return axios.get(baseUrl+"/recruiter/get/id/"+userName)
    }

    getJobList(id){
        return axios.get(baseUrl+"/job/byRecruiter/"+id)
    }

    deleteJob(jobId){
        return axios.get(baseUrl+"/job/close/"+jobId)
    }

    postJob(jobDetails){
        return axios.post(baseUrl+"/job/postJob",jobDetails)
    }

    addEmp(EmpDetails){
        return axios.post(baseUrl+"/recruiter/add",EmpDetails)
    }

    getJobAppliers(jobId){
        return axios.get(baseUrl+"/jobApplication/findAll/job/"+jobId)
    }
}

export default new EmployerService();