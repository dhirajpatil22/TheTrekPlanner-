import axios from "axios";
export async function signUpUser(userData){
    try {
        console.log(userData,"userDatauserDatauserData")
      let resp= await axios.post(`http://127.0.0.1:4000/user/signup/`,userData);
      return resp;
     
       
    } catch (error) {
        console.log(error)
    }
   
}
export async function signUpAdmin(userData){
    try {
        console.log(userData,"userDatauserDatauserData")
        let resp=await axios.post(`http://127.0.0.1:4000/user/adminSignup/`,userData);
        return resp;
       
    } catch (error) {
        console.log(error)
    }
   
}
export async function signIn(userData){
    try {
       let resp=await axios.post(`http://127.0.0.1:4000/user/signin/`,userData);
        return resp;
       
    } catch (error) {
        console.log(error)
    }
   
}
export async function getAllTreks(){
    try {
       
      let resp= await axios.get(`http://127.0.0.1:4000/trek/getTreks/`
      );
      return resp;
     
       
    } catch (error) {
        console.log(error)
    }
   
}




export async function fetchStudentByRoll(id){
    try {
       let resp=await axios.get(`http://127.0.0.1:4000/student/${id}`);
        return resp.data;  
       
    } catch (error) {
        console.log(error)
    }
   
}
export async function updateStudent(data,roll){
    try {
       let resp=await axios.put(`http://127.0.0.1:4000/student/${roll}`,data);
        return resp.data;  
       
    } catch (error) {
        console.log(error)
    }
   
}