import axios from "axios";

class AuthService{
    url = 'http://172.104.229.162/api/';

    async registerUser(userData: any){
        return axios.post(this.url + 'user/register/', {
            username: userData.username,
            last_name: userData.last_name,
            first_name: userData.first_name,
            password: userData.password,
            password2: userData.password2,
            email: userData.email,
        }).then( (response:any) => {
            console.log(response);
        }).catch( (error:any) => {
            console.log(error.response.data);
        });
    }

    async loginUser(userData: any){
        return axios.post(this.url + 'user/login/', {
            username: userData.username,
            password: userData.password,
        }).then( (response:any) => {
            console.log(response);
        }).catch( (error:any) => {
            console.log(error);
        })
    }
}

export default new AuthService();