<template>
  <div class="box">
      <input type="text" v-model="inputValue" @keyup.enter="search">
      <tableItem ref="musicList"></tableItem>
  </div>
</template>

<script>
import tableItem from '../components/tableItem'
import {getMvList,getSearchMv} from '../api/index'
export default {
  components:{
    tableItem
  },
  data() {
    return {
      inputValue:'',
    }
  },
  methods: {
    search(){
      getSearchMv({keywords:this.inputValue}).then(res=>{
        //成功回调
        // console.log(res)
        let _temp = res.data.result.mvs
        _temp.forEach(item=>{
          item.picUrl = item.cover
          item.song={
            artists:item.artists,
            album:{
              name:item.name},
            duration:item.duration
          }
        })
        this.$refs.musicList.type = 'mv'
        this.$refs.musicList.musicList = _temp
      });
    }
  },
  created() {
    getMvList().then(res=>{
      //成功回调
      // console.log(res)
      let _temp = res.data.data
        _temp.forEach(item=>{
          item.picUrl = item.cover
          item.song={
            artists:item.artists,
            album:{
              name:item.name},
            duration:item.duration
          }
        })
        this.$refs.musicList.type = 'mv'
        this.$refs.musicList.musicList = _temp
    });
    
  },
}
</script>

<style>

</style>