<template>
  <div class="mineloginWrap">
    <div class="mine_set">
      <span>设置</span>
      <img src="../../assets/img/ic_settings_white.png"/>
    </div>
    <div class="mine_login">
      <span class="loginbtn">登录</span>
      <span class="reg">手机号快速注册></span>
      <div class="sign"><img src="../../assets/img/ic_subject_event_time.png"><span>签到</span></div>
    </div>
    <ul class="other_login">
      <li><img src="../../assets/img/ic_wechat.png"><span>微信登录</span></li>
      <li><img src="../../assets/img/ic_weibo.png"><span>微博登录</span></li>
      <li><img src="../../assets/img/qq.png"><span>QQ登录</span></li>
    </ul>
  </div>
</template>
<style>
  .mineloginWrap{height: 150px;}
  .mine_set{height: 40px;}
  .mine_set img{width: 25px;float: right}
  .mine_set span{color: #fff;float: right;}
  .mine_login{height: 40px;line-height: 40px}
  .mine_login .loginbtn{padding: 10px 50px;background: #fff;color: #EB413D;border-radius: 5px;font-size: 16px;}
  .mine_login .reg{color: #fff;font-size: 14px}
  .mine_login .sign{padding: 5px;border-bottom-left-radius: 38%;border-top-left-radius: 38%;border: 1px solid rgba(255,255,255,.5);display: inline-block;float: right;margin-right: -10px;color: #fff;height: 30px;line-height: 30px;}
  .mine_login .sign img{width: 30px;margin-right: 5px;float: left}
  .mine_login .sign span{float: left}
  .other_login{color: #fff;padding: 30px 0}
  .other_login li{height: 30px;width: 33.3333%}
  .other_login img{width: 20px;margin:0 5px;float: left}
  .other_login span{float: left}
</style>
