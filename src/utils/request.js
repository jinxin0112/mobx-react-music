import axios from 'axios';

axios.interceptors.response.use(res=>{
    if(res.status === 200){
        return res.data
    }else{
        return Promise.reject('error');
    }
});

export default axios