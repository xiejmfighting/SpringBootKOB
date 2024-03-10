<template>
  <meta http-equiv="X-Content-Type-Options" content="nosniff" />
  <div >
  <div>Bot昵称：{{ bot_name }}</div>
  <div>Bot战力: {{ bot_rating }}</div>
    </div>
  <router-view/><router-view/>
</template>

<script>
import $ from 'jquery';//通过ajax对后端取数据
import {ref} from 'vue';//定义变量


//固定写法
export default{
  name:"App",
  setup:()=>{//整个函数的入口
    let bot_name=ref("");
    let bot_rating=ref("");
    $.ajax({
       url:"http://127.0.0.1:3000/pk/getbotinfo/",
       type:"get",
       success:resp =>{
        bot_name.value=resp.name;
        bot_rating.value=resp.rating;
        console.log(resp);
       }
    });

    return {
      bot_name,
      bot_rating
    }

  }
}
</script>

<style>
body{
  background-image: url("./assets/background.png");
  background-size: cover;
}

</style>
