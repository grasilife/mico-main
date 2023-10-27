<template>
  <div>111</div>
  <card-comp msg="test"></card-comp>
  <!-- <title-comp msg="test2"></title-comp> -->
</template>
<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  let scriptEl = document.createElement('script');
  scriptEl.setAttribute('type', 'module');
  scriptEl.src =
    'https://cdn.jsdelivr.net/npm/@webest/test-vite-vue-webcomponents@0.0.5/dist/card-component.js';
  document.head.appendChild(scriptEl);
});
</script>
