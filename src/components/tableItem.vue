<template>
  <table class="tab">
        <tr>
            <th></th>
            <th>音乐标题</th>
            <th>歌手</th>
            <th>专辑</th>
            <th>时长</th>
        </tr>
        <tr v-for="(item, index) in musicList" :key="index" @click="goPlay(item.id)" :class="{active:index%2==0}">
            <td class="item-td">
                <span>{{index+1}}</span>
                <img class="icon" :src="item.picUrl" alt="">
            </td>
            <td>{{item.name}}</td>
            <td>{{item.song.artists | filterAr}}</td>
            <td>{{item.song.album.name}}</td>
            <td>{{item.song.duration | filterTime}}</td>
        </tr>
    </table>
</template>

<script>
import moment from 'moment'
export default {
    data() {
        return {
            musicList:[],
            type:'mp3'
        }
    },
     filters:{
        filterAr(arr){
            return arr.map(item=>{
                return item.name
            }).join(' & ')
        },
        filterTime(num){
            //moment()不传参则获取当前时间
            //moment().format(YY年MM月DD日 H：24小时、h12小时 ： mm分：ss秒)
            return moment(num).format('mm:ss')
        }
    },
    methods: {
         goPlay(id){
             if(this.type == 'mp3'){
                 this.$router.push('/audioPlay?id='+id)
             }else{
                 this.$router.push('/mvPlay?id='+id)
             }
        }
    },
}
</script>

<style>
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
.active{
    background-color: #f9f9f9;
}
</style>