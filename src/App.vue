<template>
  <div id="app">
    <dialogue></dialogue>
  </div>
</template>

<script>
import Dialogue from "./views/DialogueGame.vue";
export default {
  data() {
    return {};
  },
  components: {
    dialogue: Dialogue,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins";
  position: relative;
  background: linear-gradient(to left, #d049d2, #d55a99);
}
</style>
