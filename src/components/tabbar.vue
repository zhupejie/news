<template>
  <div class="tabbarWrap">
    <ul>
      <Tabbaritem v-for='(item,index) in tabarr' :bottxt="item.text" :mark="item.marktxt" :xuan="selected" @change="getval" :key="item.id">
        <img :src="item.nurl" slot="normalimg">
        <img :src="item.acurl" slot="acimg">
      </Tabbaritem>
    </ul>
  </div>
</template>
<script>
  import Tabbaritem from "./tabbaritem"
  export default{
    components:{
      Tabbaritem
    },
    data:function(){
      return{
        selected:"news",
        tabarr:[
          {"text":"新闻","marktxt":"news","nurl":require("../assets/img/1.png"),"acurl":require("../assets/img/6.png"),"id":1},
          {"text":"直播","marktxt":"live","nurl":require("../assets/img/3.png"),"acurl":require("../assets/img/8.png"),"id":2},
          {"text":"话题","marktxt":"talk","nurl":require("../assets/img/2.png"),"acurl":require("../assets/img/7.png"),"id":3},
          {"text":"我","marktxt":"mine","nurl":require("../assets/img/5.png"),"acurl":require("../assets/img/10.png"),"id":4}
        ]
      }
    },
    methods:{
      getval:function(val){
        this.selected=val;
      }
    }
  }
</script>
<style>
  .tabbarWrap{width: 100%;background: #FDFBFC;position: fixed;bottom: 0;border-top: 1px solid #DCD6D6;z-index: 10}
</style>

