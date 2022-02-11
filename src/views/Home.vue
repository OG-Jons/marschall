<template>
  <div>
    <h1>
      hello
      <vue-typer
        class="gradient-text"
        text="Jonas Marschall"
        :repeat="Infinity"
        :shuffle="false"
        initial-action="typing"
        :pre-type-delay="70"
        :type-delay="70"
        :pre-erase-delay="2000"
        :erase-delay="40"
        erase-style="backspace"
        caret-animation="expand"
      />
    </h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  metaInfo: {
    title: "Home",
  },
};
</script>
