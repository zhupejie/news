<template>
  <li>
    <slot></slot>
    <span>{{newsicontxt}}</span>
  </li>
</template>
<style>

</style>
<script>
  export default {
    props:["newsicontxt"]
  }
</script>
