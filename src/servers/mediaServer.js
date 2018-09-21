import request from '../utils/request';

export const getSongDetail = (id)=>{
    request(`localhost:3333/song/detail?ids=${id}`)
}