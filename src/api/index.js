import axios from 'axios'
 axios.defaults.baseURL='https://autumnfish.cn'
export function getBanner(){
   return axios({
        url:'/banner?t='+Math.random()*999,
    })
}
export function getMusicList(){
    return axios({
        url:'/personalized/newsong?sdfg='+Math.random()*999,
    })
}
export function getMusicUrl(params){
    return axios({
        url:'/song/url?=dfg'+Math.random()*999,
        params:params
    })
}
export function getMusicInfo(params){
    return axios({
        url:'/song/detail?=dfg'+Math.random()*999,
        params:params
    })
}
export function getSearchMusic(params){
    return axios({
        url:'/search',
        params: params
    })
}
export function getMvUrl(params){
    return axios({
        url:'/mv/url?=dfg'+Math.random()*999,
        params:params
    })
}
export function getMvInfo(params){
    return axios({
        url:'/mv/detail?=dfg'+Math.random()*999,
        params:params
    })
}
export function getSearchMv(params){
    return axios({
        url:'/search?type=1004&sdgsd='+Math.random()*999,
        params: params
    })
}
export function getMvList(){
    return axios({
        url:'/mv/all?dfg='+Math.random()*999,
    })
}