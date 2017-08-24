<template>
  <div>
    <MyNews v-for="(item,index) in arr" :medianame="item.media_name" :title="item.title" :keywords="item.keywords" :key="item.media_id">
      <img :src="item.image_list[2].url" slot="pic"/>
    </MyNews>
  </div>
</template>
<script>
  import MyNews from "../news/newscon"
  export default {
    components: {

      MyNews
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
