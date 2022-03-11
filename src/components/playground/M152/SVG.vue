<template>
  <div class="svg-demo flex flex-column-center">
    <h1>SVG Component</h1>
    <div style="width: 50%">
      <custom-slider min="10" max="1024" step="2" v-model="width" />
    </div>
    <img src="@/assets/svg/poglogo.svg" :width="width" />
  </div>
</template>

<script>
import CustomSlider from "vue-custom-range-slider";
import "vue-custom-range-slider/dist/vue-custom-range-slider.scss";

export default {
  name: "SVGComponent",
  components: {
    CustomSlider,
  },
  data() {
    return {
      width: "64",
    };
  },
};
</script>

<style scoped lang="scss">
.svg-demo {
  gap: 2rem;
}
</style>
