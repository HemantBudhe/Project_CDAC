import axios from 'axios';
const baseUrl="http://localhost:8080"
class UserService{
    checkLogin(user){
        return axios.post(baseUrl+"/freelancer/user/login",user)
    }

    getUser(userName){
        return axios.get(baseUrl+"/freelancer/get/id/"+userName)
    }

    getJobList(){
        return axios.get(baseUrl+"/job/findAll")
    }

    applyJob(coverL,jobId,freelancerId){
        const requestData = {
            coverL: coverL,
            jobId: jobId,
            freelancerId: freelancerId
        };
        return axios.post(baseUrl+"/jobApplication/apply",requestData)
    }

    addUser(userDetails){
        return axios.post(baseUrl+"/freelancer/add",userDetails)
    }

    getAppliedJob(id){
        return axios.get(baseUrl+"/jobApplication/findByFrId/frId/"+id)
    }

    updateUser(id,user){
        return axios.put(baseUrl+"/freelancer/update/"+id,user)
    }
}

export default new UserService();