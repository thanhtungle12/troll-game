<template>
  <div class="all">
    <div class="dialogue" v-if="!isStart">
      <p>Press Start To Play Game</p>
      <button v-on:click="start">Start</button>
    </div>
    <div class="box" v-if="isBox" v-bind:style="styleObject">
      <p>Em Tùng có bị bê đê?</p>
      <div>
        <button v-on:click="yes()">CÓ</button>
        <button
          @mouseenter="
            no();
            tangGiaTri();
          "
        >
          KHÔNG
        </button>
      </div>
    </div>
    <div class="result" v-if="isGay">
      <p>Em tùng là bê đê, đã cố gắng bào chữa {{ dem }} lần</p>
      <button
        v-on:click="
          restart();
          resetGiaTri();
        "
      >
        Bào chữa tiếp ?
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      isStart: false,
      isGay: false,
      isBox: false,
      positionTop: window.innerHeight / 2 - 35,
      positionLeft: window.innerWidth / 2 - 300 / 2,
    };
  },
  computed: {
    styleObject() {
      return {
        position: "absolute",
        top: this.positionTop + "px",
        left: this.positionLeft + "px",
      };
    },

    ...mapGetters(["dem"]),
  },
  methods: {
    start() {
      this.isStart = true;
      this.isBox = true;
    },
    no() {
      this.positionTop = Math.random() * (window.innerHeight - 70);
      this.positionLeft = Math.random() * (window.innerWidth - 300);
      console.log(this.dem);
    },
    yes() {
      this.isGay = true;
      this.isBox = false;
    },
    restart() {
      this.isGay = false;
      this.isStart = false;
      this.isBox = false;
      this.positionTop = window.innerHeight / 2 - 35;
      this.positionLeft = window.innerWidth / 2 - 300 / 2;
    },
    ...mapMutations(["tanggiatri", "resetgiatri"]),
    ...mapActions(["tangGiaTri", "resetGiaTri"]),
  },
};
</script>

<style>
.dialogue {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 20px;
  width: 500px;
  background: white;
  transition: all 0.3s linear;
}
.dialogue p {
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: 800;
}
.dialogue button {
  border: none;
  outline: none;
  cursor: pointer;
  background: #ffb2ff;
  font-size: 25px;
  font-weight: 600;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  padding: 5px 20px;
  border-radius: 5px;
  transition: all 0.3s linear;
}
.dialogue:hover {
  box-shadow: none;
}
.dialogue button:hover {
  background: #ff5bff;
  box-shadow: none;
}
.box {
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 70px;
  background: #d500f9;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s linear;
}
.box div button {
  border: none;
  outline: none;
  font-size: 15px;
  background: #ffca28;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 10px;
  transition: all 0.3s;
}
.box div button:hover {
  background: #ff8f00;
}
.box div button + button {
  margin-left: 20px;
}
.result {
  width: 500px;
  height: 80px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: #ffee58;
}
.result button {
  border: none;
  outline: none;
  font-size: 20px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  background: #212121;
  color: white;
}
</style>
