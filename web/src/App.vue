<template>
  <NavBar></NavBar>
  <router-view/>
</template>

<script>
// import $ from 'jquery';//通过ajax对后端取数据
// import {ref} from 'vue';//定义变量
import NavBar from './components/NavBar.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

//固定写法
export default{
  components:{
    NavBar,
  }
  
}
</script>

<style>
body{
  background-image: url("./assets/bk.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

</style>
