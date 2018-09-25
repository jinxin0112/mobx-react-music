import request from '../utils/request';

export const getSongDetail = (id)=>{
    return request({
        url: `http://localhost:3333/song/detail?ids=${id}`,
    })
}

export const getSongUrl = (id)=>{
    return request({
        url: `http://localhost:3333/music/url?id=${id}`,
    })
}