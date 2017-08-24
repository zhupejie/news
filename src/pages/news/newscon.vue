<template>
  <div class="conWrap">
    <div class="con_top">
      <span class="username">{{medianame}}</span>
      <span class="keywords">|&nbsp;{{keywords}}</span>
    </div>
    <div class="con_pic">
      <slot name="pic"></slot>
    </div>
    <p class="con_con">{{title}}</p>
  </div>
</template>
<style>
  .conWrap{padding: 0 10px;margin-bottom: 20px}
  .conWrap .con_top{height: 48px;line-height: 48px;}
  .conWrap .keywords{color: #a9a9a9;font-size: 12px;overflow: hidden}
  .conWrap .con_pic img{width: 100%;}
</style>
<script>
  export default {
    props:["medianame","keywords","title"],
  }
</script>
