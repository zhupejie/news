<template>
  <div class="mineWrap">
    <div class="minetop">
      <MyLogin></MyLogin>
    </div>
    <div class="minemain">
      <MyGuanzhu></MyGuanzhu>
      <MyDingyue></MyDingyue>
      <MyMsg></MyMsg>
      <MyShop></MyShop>
      <MyRead></MyRead>
    </div>
  </div>
</template>
<style>

  .minetop{background: #EB413D;padding: 20px 10px}
  .minemain{background: #F6F6F6;position: relative;padding: 30px 10px}

</style>
<script>
  import MyLogin from "./minelogin"
  import MyGuanzhu from "./mineitem1"
  import MyDingyue from "./mineitem2"
  import MyMsg from "./minemsg"
  import MyShop from "./mineshop"
  import MyRead from "./mineread"
  export default {
    components: {
      MyLogin,
      MyGuanzhu,
      MyDingyue,
      MyMsg,
      MyShop,
      MyRead
    },
  }
</script>
