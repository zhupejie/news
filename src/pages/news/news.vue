<script src="../../main.js"></script>
<template>
  <div>
    <div class="header">
      <MyHeader toptxt1="问吧" toptxt2="话题" toptxt3="关注"></MyHeader>
    </div>
    <div id="main">
      <NewsIconNav></NewsIconNav>
    </div>
    <MyNews2 v-for="(item,index) in arr" :medianame="item.media_name" :title="item.title" :comment_count="item.comment_count" :key="item.media_id">
      <img :src="item.image_list[0].url" slot="pic1"/>
      <img :src="item.image_list[1].url" slot="pic2"/>
      <img :src="item.image_list[2].url" slot="pic3"/>
    </MyNews2>

  </div>
</template>
<style>
  #main{height: 132px}
  .header{height: 48px;}
</style>
<script>
  import MyHeader from "../../components/header"
  import NewsIconNav from "./newsiconnav"
  import MyNews2 from "./newscon2"
  export default {
    components: {
      MyHeader,
      NewsIconNav,
      MyNews2
    },
    data:function(){
      return{
        arr:[],
      }
    },
    created: function () {
      this.axios.get('/api/homeData').then((response) => {
        var data = response.data.data.data;
        var recommend = [];
            recommend.push(data);
        this.arr = recommend[0];
        //console.log(this.arr[0])
      })
    }



  }



</script>
