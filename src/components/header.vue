<script src="../../config/index.js"></script>
<template>
  <div class="headerWrap">
    <img src="../assets/img/ic_search_gray.png" class="left">
    <ul>
      <li v-for='(item, index) in myData' :class="{ac:item.pagename==now}" @click="actop(item.pagename)">{{item.name}}</li>
    </ul>
    <img src="../assets/img/ic_channel_content_comment_count_flag.png" class="right">
  </div>
</template>
<style>
  .headerWrap{width: 100%;height: 48px;background: #DE3031;text-align: center;color: rgba(255,255,255,.5);font-size: 14px;line-height: 48px;position: fixed;border-bottom: 1px solid #AE6A6B;z-index: 5;top:0;}
  .headerWrap ul{display: inline-block;*display: inline;*zoom:1;height: 24px;width: 50%;border: 1px solid rgba(255,255,255,.5);border-radius: 30px;vertical-align: middle;line-height: 24px}
  .headerWrap li{width: 33.3333%;}
  .headerWrap .ac{border-radius: 30px;background: #fff;color:#DE3031; }
  .headerWrap img{width: 27px;position: absolute}
  .headerWrap .left{top:12px;left: 3%;}
  .headerWrap .right{top:12px;right:3%;}
</style>
<script>
  export default {
    data:function(){
      return{
        myData:[
          {"name":"问吧","pagename":"news"},
          {"name":"话题","pagename":"talk"},
          {"name":"关注","pagename":"mine"}
          ],
        now:"news"
      }
    },
    methods:{
      actop:function(i){
        this.now=i;
        this.$router.push('/'+this.now);
      }
    }
  }
</script>
