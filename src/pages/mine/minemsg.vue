<template>
  <div class="minemsgWrap">
    <MyItem txt="我的消息">
      <img src="../../assets/img/ic_mine_notification.png" slot="icon"/>
      <span slot="msg" class="itemmsg">评论我的跟帖/通知</span>
    </MyItem>
    <MyItem txt="最新动态">
      <img src="../../assets/img/ic_my_doulist.png" slot="icon"/>
    </MyItem>
  </div>
</template>
<style>
  .minemsgWrap{box-shadow: 0 0 10px #999;border-radius: 5px;background: #fff;margin-bottom: 10px}
</style>
<script>
  import MyItem from "./mineitem3"
  export default {
    components: {
      MyItem
    },
  }
</script>
