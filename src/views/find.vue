<template>
  <div>
    <el-carousel :interval="4000" type="card" >
      <el-carousel-item v-for="(item, index) in list" :key="index">
        <img class="img" :src="item.imageUrl" alt="">
      </el-carousel-item>
    </el-carousel>
    <!-- <table class="tab">
        <tr>
            <th></th>
            <th>音乐标题</th>
            <th>歌手</th>
            <th>专辑</th>
            <th>时长</th>
        </tr>
        <tr v-for="(item, index) in musicList" :key="index" @click="goPlay(item.id)">
            <td class="item-td">
                <span>{{index+1}}</span>
                <img class="icon" :src="item.picUrl" alt="">
            </td>
            <td>{{item.name}}</td>
            <td>{{item.song.artists | filterAr}}</td>
            <td>{{item.song.album.name}}</td>
            <td>{{item.song.duration | filterTime}}</td>
        </tr>
    </table> -->
    <tableItem ref="musicList"></tableItem>
  </div>
</template>

<script>
import {getBanner,getMusicList} from '../api/index'
import tableItem from '../components/tableItem'
export default {
    components:{
        tableItem
    },
    data() {
        return {
            list:[],
            musicList:[]
        }
    },

    methods: {
       
    },
    created() {
        getBanner().then(res=>{
            //成功回调
            // console.log(res)
            this.list = res.data.banners
        });
        getMusicList().then(res=>{
            //成功回调
            // console.log(res)
            // this.musicList = res.data.result
            this.$refs.musicList.musicList = res.data.result
        });
    },
};
</script>

<style scoped>
.img{
    width: 100%;
    height: 100%;
}
.tab{
    width: 100%;
}
.icon{
    width: 60px;
    margin-right: 30px;
}
.item-td{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>