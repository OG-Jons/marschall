<template>
  <div class="svg-demo flex flex-column-center">
    <h1>SVG Component</h1>
    <img src="@/assets/svg/poglogo.svg" width="64" />
    <img src="@/assets/svg/poglogo.svg" width="256" />
    <img src="@/assets/svg/poglogo.svg" width="1024" />
  </div>
</template>

<script>
export default {
  name: "SVGComponent",
};
</script>

<style scoped lang="scss">
.svg-demo {
  gap: 2rem;
}
</style>
