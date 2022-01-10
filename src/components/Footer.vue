<template>
  <div>
    <p class="copyright">
      Copyright © {{ new Date().getFullYear() }} Jonas Marschall
    </p>
    <a href="https://github.com/OG-Jons">
      <unicon name="github" fill="#FFFFFF68" hover-fill="white" />
    </a>
    <a href="https://www.instagram.com/jonassucksatbiking/">
      <unicon name="instagram" fill="#FFFFFF68" hover-fill="white" />
    </a>
    <a href="mailto:jonas@marschall.pro">
      <unicon name="envelope" fill="#FFFFFF68" hover-fill="white" />
    </a>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped></style>
