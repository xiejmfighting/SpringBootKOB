<template>
    <div class="playground">
        <GameMap></GameMap>
    </div>
</template>

<script>
import GameMap from './GameMap.vue'
export default{
    components:{
        GameMap,
    }
}
</script>

<style scoped>

.playground{
    width: 60vw;
    height: 70vh;
    background-color: aqua;
    margin: 40px auto;
}
   
</style>