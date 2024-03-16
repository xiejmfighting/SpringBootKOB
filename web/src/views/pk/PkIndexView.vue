<template>
<PlayGround/>
<button  @click="refreshPage" type="button" class="btn btn-secondary">重置地图</button>
</template>
    
<script>
    import PlayGround from '../../components/PlayGround.vue';
    
    export default{
    components:{
        PlayGround,
    },
    methods: {
    refreshPage() {
      window.location.reload();
    }
  }

}
</script>
    
<style scoped>
     button{
        position: absolute;
        bottom: 13%;
        right: 20%;
        /* color: black; */
     }
</style>