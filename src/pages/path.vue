<template>
  <component :is="path" msg="test"></component>
  <!-- <card-comp msg="test2"></card-comp> -->
  <!-- <title-comp msg="test2"></title-comp> -->
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed, onMounted, watch } from 'vue';
let route = useRoute();
let path = computed(() => {
  return route.params.id;
});
console.log(path.value, 'path');
function loadingCom() {
  console.log(route.params, 'jiji');
  let scriptEl = document.createElement('script');
  scriptEl.setAttribute('type', 'module');
  if (path.value === 'card-comp') {
    scriptEl.src =
      'https://cdn.jsdelivr.net/npm/@webest/test-vite-vue-webcomponents@0.0.5/dist/card-component.js';
  }
  if (path.value === 'title-comp') {
    scriptEl.src =
      'https://cdn.jsdelivr.net/npm/@webest/test-vite-vue-webcomponents@0.0.5/dist/title-component.js';
  }

  document.head.appendChild(scriptEl);
}
onMounted(() => {
  //   loadingCom();
});
watch(
  () => route.params,
  () => {
    loadingCom();
    console.log(21212121);
  },
  {
    immediate: true,
  }
);
</script>
