<template>
  <div v-if="info != ''" class="box">
      <h2>{{info.name}}</h2>
      <p>{{info.artists | filterAr }}</p>
      <!-- <img :src="info.al.picUrl" alt=""> -->
      <video :src="mvUrl" controls autoplay></video>
  </div>
</template>

<script>
import {getMvUrl,getMvInfo} from '../api/index'
export default {
    data() {
        return {
            mvUrl:'',
            info:'',
        }
    },
    filters:{
        filterAr(arr){
            return arr.map(item=>{
                return item.name
            }).join(' / ')
        }
    },
    created(){
        getMvUrl({id:this.$route.query.id}).then(res=>{
            //成功回调
            console.log('url',res)
            this.mvUrl = res.data.data.url
        });
        getMvInfo({mvid:this.$route.query.id}).then(res=>{
            //成功回调
            console.log('info',res)
            this.info = res.data.data
        });
    }
}
</script>

<style>
video{
    width: 1200px;
    margin-top: 20px;
}
p{
    margin-top: 20px;
}
</style>