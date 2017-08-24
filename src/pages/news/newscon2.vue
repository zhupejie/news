<template>
  <div class="con2Wrap">

    <p class="con2_con">{{title}}</p>
    <div class="con2_pic">
      <slot name="pic1"></slot>
      <slot name="pic2"></slot>
      <slot name="pic3"></slot>
    </div>
    <div class="con2_top">
      <span class="username2">{{medianame}}</span>
      <span class="comment_count">评论：{{comment_count}}</span>
    </div>
  </div>
</template>
<style>
  .con2Wrap{padding: 0 10px;margin-bottom: 20px}
  .con2Wrap .con2_top{height: 48px;line-height: 48px;}
  .con2Wrap .comment_count{color: #a9a9a9;font-size: 12px;float: right}
  .con2Wrap .con2_pic img{width: 30%;}
</style>
<script>
  export default {
    props:["medianame","comment_count","title"],
  }
</script>
