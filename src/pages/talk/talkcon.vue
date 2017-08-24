<template>
  <div class="talkconWrap">
    <h3>{{title}}</h3>
    <div class="talkmsg">
      <span class="talkname">{{media_name}}</span>
      <br>
      <span class="talktime">{{datetime}}</span>
    </div>
    <div class="talkmain">
      <p>{{abstract}}</p>
      <slot name="pic1"></slot>
      <slot name="pic2"></slot>
      <slot name="pic3"></slot>
      <span>{{keywords}}</span>
    </div>

  </div>
</template>
<style>
  .talkconWrap{margin-bottom: 20px}
  .talkconWrap .talkmsg{padding: 20px 10px}
  .talkconWrap .talkmsg .talkname{font-size: 14px;color: #333;}
  .talkconWrap .talkmsg .talktime{font-size: 12px;color: #666;}
  .talkconWrap p{text-indent: 2em;margin-bottom: 10px}
  .talkconWrap img{width: 100%}
  .talkmain>span{font-size: 12px;color: #ccc;}
</style>
<script>
  export default {
    props:["media_name","datetime","title","keywords","abstract"]
  }
</script>
