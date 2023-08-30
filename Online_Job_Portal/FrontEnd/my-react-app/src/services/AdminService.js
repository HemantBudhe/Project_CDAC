import axios from 'axios';
const baseUrl="http://localhost:8080";

class AdminService{
    checkLogin(user){
        return axios.post(baseUrl+"/admin/login",user)
    }

    jobList(){
        return axios.get(baseUrl+"/admin/find/jobs")
    }

    deleteJob(id){
        return axios.get(baseUrl+"/admin/job/close/"+id)
    }

    recList(){
        return axios.get(baseUrl+"/admin/find/recruiter")
    }

    deletRec(id){
        return axios.get(baseUrl+"/admin/recruiter/close/"+id)
    }

    userList(){
        return axios.get(baseUrl+"/admin/find/freelancer")
    }

    deleteUser(id){
        return axios.get(baseUrl+"/admin/freelancer/close/"+id)
    }

}

export default new AdminService();