<template>
  <div>
    <div>
      <img :src="role.img" :height="role.lang*6+'px'" width="100px" >
      {{role.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: "RoleView",
  props: [
    'role'
  ]
}
</script>

<style scoped>

</style>