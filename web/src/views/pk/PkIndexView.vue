<template>
  <PlayGround v-if="$store.state.pk.status === 'playing'" />
  <MatchGround v-if="$store.state.pk.status === 'matching'" />
  <ResultBoard v-if="$store.state.pk.loser !== 'none'"></ResultBoard>
</template>

<script>
import PlayGround from '../../components/PlayGround.vue';
import { onMounted, onUnmounted } from 'vue'
//onMounted当组件被挂载之后执行的函数,onUnmounted当组件被卸载之后执行的函数
import { useStore } from 'vuex'
import MatchGround from '../../components/MatchGround.vue';
import ResultBoard from '../../components/ResultBoard.vue';

export default {
  components: {
    PlayGround, MatchGround, ResultBoard
  },

  setup() {
    const store = useStore();
    const socketUrl = `ws://127.0.0.1:3000/websocket/${store.state.user.token}/`;

    let socket = null;
    onMounted(() => {
      store.commit("updateOpponent", {
        username: "我的对手",
        photo: "https://cdn.acwing.com/media/article/image/2022/08/09/1_1db2488f17-anonymous.png"
      })
      socket = new WebSocket(socketUrl);

      socket.onopen = () => {//当前端向后端建立链接成功建立时
        console.log("connected!")
        store.commit("updateSocket", socket);
      }
      socket.onmessage = msg => {//当接收到信息的时候
        const data = JSON.parse(msg.data);
        if (data.event === "start-matching") {
          store.commit("updateOpponent", {
            photo: data.opponent_photo,
            username: data.opponent_username,
          });
          setTimeout(() => {
            store.commit("updateStatus", "playing");
          }, 2000);

          store.commit("updateGame", data.game);
        } else if (data.event === "move") {
          console.log(data);
          const game = store.state.pk.gameObject;
          const [snake0, snake1] = game.snakes;
          snake0.set_direction(data.a_direction);
          snake1.set_direction(data.b_direction);
        } else if (data.event === "result") {
          console.log(data);
          const game = store.state.pk.gameObject;
          const [snake0, snake1] = game.snakes;
          if (data.loser === "all" || data.loser === "A") {
            snake0.status = "die";
          }
          if (data.loser === "all" || data.loser === "B") {
            snake1.status = "die";
          }
          store.commit("updateLoser", data.loser);

        }
      }
      socket.onclose = () => {//当前端向后端关闭连接的时候执行的函数
        console.log("disconnected!");
      }
    });

    onUnmounted(() => {
      socket.close();
      store.commit("updateStatus", "matching");
    })

  },


}
</script>

<style scoped></style>