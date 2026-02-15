<script setup lang="ts">
import { ref } from "vue";
import { useLoop } from "@tresjs/core";

const square1 = ref<THREE.mesh | null>(null);

const { onBeforeRender } = useLoop();

onBeforeRender(() => {
  if (square1.value) {
    square1.value.rotation.z += 0.01;
  }
});
</script>

<template>
  <!-- A simple square -->
  <TresMesh ref="square1">
    <TresPlaneGeometry :args="[2, 2]" />
    <TresMeshBasicMaterial color="red" />
  </TresMesh>
</template>

<style scoped></style>
