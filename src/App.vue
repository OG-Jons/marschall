<template>
  <div id="app">
    <div>
      <Navbar />
    </div>
    <transition
      name="fade"
      mode="out-in"
      appear
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <router-view />
    </transition>
  </div>
</template>
<script>
import Navbar from "./components/Navbar";

export default {
  components: { Navbar },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    },
  },
};
</script>
