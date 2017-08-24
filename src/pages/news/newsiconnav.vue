<script src="../../../../my-vue/src/main.js"></script>
<template>
  <div class="newsiconWrap">
    <ul>
      <NewsIconItem :newsicontxt="item.txt" v-for='(item, index) in newsicontoparr' :key="item.id">
        <img :src="item.url">
      </NewsIconItem>

      <NewsIconItem :newsicontxt="item.txt" v-show="flag" v-for='(item, index) in newsiconarr' :key="item.id">
        <img :src="item.url">
      </NewsIconItem>
      <li class="last" @click="show()">
        <img src="../../assets/img/ic_album_arrow_up.png" v-show="flag">
        <img src="../../assets/img/ic_album_arrow_down.png" v-show="!flag">
      </li>
    </ul>
  </div>
</template>
<style>
  .newsiconWrap{width: 100%;border-bottom: 10px solid #F0F0F7;background: #fff;position: fixed;top:49px;z-index: 5}
  .newsiconWrap li{text-align: center;width: 20%;height: 70px;padding-top: 10px;color: #a9a9a9;font-size: 14px}
  .newsiconWrap img{width: 50px}
  .newsiconWrap span{display: block}
  .newsiconWrap .last{height: 32px;width: 100%}
  .newsiconWrap .last img{width: 15px}
</style>
<script>
  import NewsIconItem from "./newsiconitem"
  export default {
    components: {
      NewsIconItem
    },
    data:function(){
      return{
        flag:false,
        newsicontoparr:[
          {"txt":"法律","url":require("../../assets/img/icon_03.jpg"),"id":1},
          {"txt":"健康","url":require("../../assets/img/icon_05.jpg"),"id":2},
          {"txt":"汽车","url":require("../../assets/img/icon_07.jpg"),"id":3},
          {"txt":"财经","url":require("../../assets/img/icon_09.jpg"),"id":4},
          {"txt":"历史","url":require("../../assets/img/icon_11.jpg"),"id":5}
        ],
        newsiconarr:[
          {"txt":"时政","url":require("../../assets/img/icon_18.jpg"),"id":1},
          {"txt":"体育","url":require("../../assets/img/icon_19.jpg"),"id":2},
          {"txt":"军事","url":require("../../assets/img/icon_20.jpg"),"id":3},
          {"txt":"旅游","url":require("../../assets/img/icon_21.jpg"),"id":4},
          {"txt":"房产","url":require("../../assets/img/icon_22.jpg"),"id":5},
          {"txt":"科技","url":require("../../assets/img/icon_28.jpg"),"id":6},
          {"txt":"教育","url":require("../../assets/img/icon_29.jpg"),"id":7},
          {"txt":"娱乐","url":require("../../assets/img/icon_30.jpg"),"id":8},
          {"txt":"生活","url":require("../../assets/img/icon_31.jpg"),"id":9},
          {"txt":"时尚","url":require("../../assets/img/icon_32.jpg"),"id":10}
        ]
      }
    },
    methods: {
      show: function () {
        var mainbox=document.getElementById("main");
        this.flag = !this.flag;
        if(this.flag){
          mainbox.style.height="292px"
        }else{
          mainbox.style.height="132px"
        }
      }
    },



  }
</script>
