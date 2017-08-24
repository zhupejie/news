<template>
  <div class="minereadWrap">
    <MyItem txt="离线阅读">
      <img src="../../assets/img/ic_my_events.png" slot="icon"/>
    </MyItem>
    <MyItem txt="夜间模式">
      <img src="../../assets/img/ic_my_note.png" slot="icon"/>
    </MyItem>
    <MyItem txt="活动广场">
      <img src="../../assets/img/ic_my_album.png" slot="icon"/>
      <span slot="msg" class="itemmsg">写跟帖，赢大奖</span>
    </MyItem>
    <MyItem txt="意见反馈">
      <img src="../../assets/img/ic_my_status.png" slot="icon"/>
    </MyItem>
  </div>
</template>
<style>
  .minereadWrap{box-shadow: 0 0 10px #999;border-radius: 5px;background: #fff;margin-bottom: 30px}

</style>
<script>
  import MyItem from "./mineitem3"
  export default {
    components: {
      MyItem
    },
  }
</script>
