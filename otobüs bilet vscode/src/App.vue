<template>
  <div>
    <transition name="fade" mode="out-in">
      <router-view to="/src/Components/Login/Login.vue"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  components: {},
  created() {},
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-leave-active {
  transition: opacity 0.3s ease-out;
  opacity: 0;
}
</style>
