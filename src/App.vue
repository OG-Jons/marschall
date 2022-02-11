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
    <div>
      <Footer />
    </div>
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  name: "App",
  metaInfo: {
    titleTemplate: "%s | My Awesome Webapp",
  },
  components: { Navbar, Footer },
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
