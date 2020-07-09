<template>
  <div class="box">
      <input type="text" v-model="inputValue" @keyup.enter="search">
      <tableItem ref="musicList"></tableItem>
  </div>
</template>

<script>
import tableItem from '../components/tableItem'
import {getMusicList,getSearchMusic} from '../api/index'
export default {
  components:{
    tableItem
  },
  data() {
    return {
      inputValue:''
    }
  },
  methods: {
    search(){
      getSearchMusic({keywords:this.inputValue}).then(res=>{
        //成功回调
        // console.log(res)
        let _temp = res.data.result.songs
        _temp.forEach(item=>{
          item.song={
            artists:item.artists,
            album:item.album,
            duration:item.duration
          }
        })
        this.$refs.musicList.musicList = _temp
      });
    }
  },
  created() {
    getMusicList().then(res=>{
            //成功回调
            // console.log(res)
            // this.musicList = res.data.result
            this.$refs.musicList.musicList = res.data.result
        });
  },
}
</script>

<style>
.box{
  text-align: center;
}
input{
  width: 400px;
  height: 40px;
  margin-bottom: 20px;
  font-size: 20px;
  color: #888;
}
</style>