<template>
  <div>
    <h1>Here we're gonna do some animations</h1>
    <c-s-s-hover-animations />
  </div>
</template>

<script>
import CSSHoverAnimations from "@/components/playground/CSSHoverAnimations";

export default {
  name: "CSSAnimations",
  components: {
    CSSHoverAnimations,
  },
  metaInfo: {
    title: "CSS Animations",
    description:
      "CSS Animations are a way to animate elements on the web. They are used to create a smooth transition between two different states.",
  },
};
</script>
