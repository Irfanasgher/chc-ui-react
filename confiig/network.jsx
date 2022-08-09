import axios from 'axios';
import { notification } from 'antd';

export default {
    get: async (url, config) => {
        try{
            return await axios.get(url, config)
        }
        catch(e){
            // const message = "Something went wrong. Please try Again Later";
            // console.log(e.response);
            handleErrors(e)
            return {e}
        }
    },
    post: async (url,data, config) => {
        try{
            return await axios.post(url, data, config);
        }
        catch(e){
            // console.log(e.response);
            handleErrors(e);
            return {e}
        }
    }
}
export const handleErrors =(e) =>{
    const message = "Something went wrong. Please try Again Later";
    if(e !== undefined){
        // if(e.response.status === 401){
        //     if(e.response.data.error !== "Unauthorised"){
        //         localStorage.removeItem('userToken');
        //         localStorage.removeItem('currentUser');
        //         // localStorage.removeItem('userPermission');
        //         window.location.reload();
        //     }
        // }
        // if(e.response.status === 403){
        //     let host = window.location.origin
        //     window.location.href = host + '/unauthorized'
        // }
        if(e.response.data.error){
            if(e.response.data.error.email){
                return  notification['error']({
                    message: 'Error',
                    description: e.response.data.error.email[0],
                    duration: 3
                });
            }
            else if(e.response.data.error.password){
                return  notification['error']({
                    message: 'Error',
                    description: e.response.data.error.password[0],
                    duration: 3
                });
            }
            else if(e.response.data.error.phone){
                return  notification['error']({
                    message: 'Error',
                    description: e.response.data.error.phone[0],
                    duration: 3
                });
            }else {
                return  notification['error']({
                    message: 'Error',
                    description: e.response.data.error,
                    duration: 3
                });
            }
        }
    }else {
        return  console.log(message)
    }


}

