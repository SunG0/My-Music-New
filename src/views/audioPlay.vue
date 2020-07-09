<template>
  <div v-if="info != ''">
      <h2>{{info.name}}</h2>
      <p>{{info.ar | filterAr}}</p>
      <img :src="info.al.picUrl" alt="">
      <audio :src="musicUrl" controls autoplay></audio>
  </div>
</template>

<script>
import {getMusicUrl,getMusicInfo} from '../api/index'
export default {
    data() {
        return {
            musicUrl:'',
            info:'',
        }
    },
    filters:{
        filterAr(arr){
            return arr.map(item=>{
                return item.name
            }).join(' & ')
        }
    },
    created(){
        getMusicUrl({id:this.$route.query.id}).then(res=>{
            //成功回调
            // console.log('歌曲url',res)
            this.musicUrl = res.data.data[0].url
        });
        getMusicInfo({ids:this.$route.query.id}).then(res=>{
            //成功回调
            this.info = res.data.songs[0]
            // console.log(res)
        });
    }
}
</script>

<style scoped>
div{
    width: 700px;
    margin: 0 auto;
    text-align: center;
}

img{
    width: 100%;
}
p{
    font-size: 20px;
    padding: 20px;
}
audio{
    width: 100%;
}
</style>