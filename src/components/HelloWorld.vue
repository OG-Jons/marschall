<template>
  <div class="hello">
    <h1>Welcome to <span class="gradient-text">Your Vue.js</span> App</h1>
    <h1>
      My name is
      <span class="gradient-text">
        <vue-typer
          :text="['Jonas Marschall']"
          :repeat="Infinity"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="70"
          :type-delay="70"
          :pre-erase-delay="2000"
          :erase-delay="250"
          erase-style="select-all"
          :erase-on-complete="false"
          caret-animation="expand"
        ></vue-typer>
      </span>
    </h1>
    <div class="gradient-test gradients" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
