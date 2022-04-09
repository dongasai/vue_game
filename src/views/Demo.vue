<template>
  <div class="home">
    <img alt="Vue logo" :src="img1">

    <br>
    <img alt="IMga" src="../assets/items_icon/itm010100011.png">

  </div>
</template>

<script>
import img1 from "../assets/items_icon/itm010100011.png";

export default {
  name: 'Home',
  date(){
    return {
      img1:img1
    }
  },
  components: {}
}
</script>
<style>
.role {
  width: 100px;
}
.home{
  font-size: 40px;
}
</style>
