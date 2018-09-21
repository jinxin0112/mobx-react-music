import axios from 'axios';

axios.interceptors.response.use(res=>{
    if(res.code === 200){
        return res
    }else{
        return Promise.reject('error');
    }
});

export default axios