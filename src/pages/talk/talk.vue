<template>
  <div class="talkWrap">
    <MyTalk v-for="(item,index) in arr" :media_name="item.media_name" :title="item.title" :keywords="item.keywords" :datetime="item.datetime" :abstract="item.abstract" :key="item.media_id">
      <img :src="item.image_list[0].url" slot="pic1"/>
      <img :src="item.image_list[1].url" slot="pic2"/>
      <img :src="item.image_list[2].url" slot="pic3"/>
    </MyTalk>
  </div>
</template>
<style>
  .talkWrap{padding: 10px}
</style>
<script>
  import MyTalk from "./talkcon"
  export default {
    components:{
      MyTalk
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
