<template>
  <div class="webflow-style-input">
    <input
      :type="type"
      :placeholder="placeholder"
      @input="handleInput"
      :value="content"
    />
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: {
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    arguments: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      content: this.value,
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
