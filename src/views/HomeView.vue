<template>
  <div class="home">
    <textarea rows="5" v-model="json"></textarea>
    <div class="viewerContainer">
      <json-viewer :value="json?JSON.parse(json):null"></json-viewer>
    </div>
  </div>
</template>
<style scoped>
  textarea{
    position: absolute;
    top: 5px;
    left: 5px;
    bottom: 5px;
    width: 400px;
  }
  .viewerContainer{
    position: absolute;
    top: 5px;
    left: 420px;
    bottom: 5px;
    right: 5px;
    border: solid #000 0.8px;
    overflow: auto;
  }
</style>
<script>
// @ is an alias to /src

export default {
  data(){
    return{
      json:''
    }
  }
}
</script>
