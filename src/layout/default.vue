<template>
  <button @click="link('card-comp')">card-comp</button>
  <button @click="link('title-comp')">title-comp</button>
  <RouterView></RouterView>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
let router = useRouter();
function link(path: string) {
  router.push({
    path,
  });
}
</script>
<style scoped></style>
