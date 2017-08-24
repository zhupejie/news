<template>
  <div class="mineshopWrap">
    <MyItem txt="金币商城">
      <img src="../../assets/img/ic_my_orders.png" slot="icon"/>
      <span slot="msg" class="itemmsg">嘿！你的500金币，在这里</span>
    </MyItem>
    <MyItem txt="金币任务">
      <img src="../../assets/img/ic_hot.png" slot="icon"/>
    </MyItem>
    <MyItem txt="我的钱包">
      <img src="../../assets/img/ic_my_wallet.png" slot="icon"/>
    </MyItem>
  </div>
</template>
<style>
  .mineshopWrap{box-shadow: 0 0 10px #999;border-radius: 5px;background: #fff;margin-bottom: 10px}
  .mineshopWrap .itemmsg{color: red}
</style>
<script>
  import MyItem from "./mineitem3"
  export default {
    components: {
      MyItem
    },
  }
</script>
