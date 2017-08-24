<template>
  <div class="mineitem3Wrap">
    <slot name="icon"></slot>
    <span class="itemname">{{txt}}</span>

    <span class="itemlast"> > </span>
    <slot name="msg"></slot>
  </div>
</template>
<style>
  .mineitem3Wrap{border-bottom: 1px solid #ccc;padding: 20px 10px;width: 95%;vertical-align: middle;}
  .mineitem3Wrap img{width: 25px;margin-right: 10px;float: left;}
  .mineitem3Wrap span{color: #ccc;font-size: 14px}
  .mineitem3Wrap .itemname{color: #000;}
  .itemlast,.itemmsg{float: right}
  .itemlast{padding: 0 5px}
</style>
<script>
  export default {
    props:["txt"]
  }
</script>
