<template>
  <NavBar></NavBar>
  <router-view />
</template>

<script>
// import $ from 'jquery';//通过ajax对后端取数据
// import {ref} from 'vue';//定义变量
import NavBar from './components/NavBar.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';


//固定写法
export default {
  components: {
    NavBar,
  },
  // setup() {


  //   // $.ajax({
  //   //   url: "http://127.0.0.1:3000/user/account/info/",
  //   //   type: "get",
  //   //   headers: {
  //   //     Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3OTZkNWRhZGMwMGE0NjBmYmFkNTcxM2Q5ZWZmMWYzZiIsInN1YiI6IjEiLCJpc3MiOiJzZyIsImlhdCI6MTcxMTAyMDgyNCwiZXhwIjoxNzEyMjMwNDI0fQ.HfIiBfTIYQ1nP5I6oUiJfnWEZxpIOHE2VmnA5C-nTgc"
  //   //   }, success(resp) {
  //   //     console.log(resp);
  //   //   },
  //   //   error(resp) {
  //   //     console.log(resp);
  //   //   }

  //   // });
  //   // $.ajax({
  //   //   url: "http://127.0.0.1:3000/user/account/register/",
  //   //   type: "post",
  //   //   data: {
  //   //     username: "400lux",
  //   //     password: "123",
  //   //     confirmedPassword: "123",
  //   //   },
  //   //   success(resp) {
  //   //     console.log(resp);
  //   //   },
  //   //   error(resp) {
  //   //     console.log(resp);
  //   //   }
  //   // })
  // }

}
</script>

<style>
body {
  background-image: url("./assets/bk.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
